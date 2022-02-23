<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 17:08:18
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-23 18:00:56
-->
<template>
  <el-container class="menu-container-container">
    <el-aside class="aside">
      <div class="tac c-white logo" :class="{ 'logo-expand': !sideBarModel.isCollapse }" @click="onClickCollapse">
        <span v-show="!sideBarModel.isCollapse">vue3-demo</span>
        <span v-show="sideBarModel.isCollapse">WYY</span>
      </div>
      <div class="menu-wrap">
        <Menu class="menu" :current="currentMenuItem" :menuList="menuList" :collapse="sideBarModel.isCollapse"></Menu>
      </div>
    </el-aside>
    <el-container>
      <el-header class="header">头部{{ num }}</el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {
  defineComponent, reactive, h, PropType, VNode, DefineComponent
} from 'vue';
import {
  ElMenu, ElMenuItem, ElSubMenu, ElIcon
} from 'element-plus';
import * as ElementPlusIcon from '@element-plus/icons-vue';
import { RouteRecordRaw, useRoute } from 'vue-router';
import { routes } from '@/router';

type RouteRecordWithChildrenRaw = {
  children: RouteRecordRaw;
} & RouteRecordRaw;

const Menu = defineComponent({
  props: {
    menuList: {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true
    },
    collapse: {
      type: Boolean,
      default: false
    },
    current: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const vnodes: VNode[] = [];

    function createMenuItem(menuItem: RouteRecordRaw): VNode | undefined {
      if (menuItem.meta?.isInMenu && menuItem.name) {
        if (menuItem.children) {
          /* eslint-disable-next-line */
          return createSubMenu(menuItem as RouteRecordWithChildrenRaw);
        }

        const slots: Record<string, unknown> = {
          title: () => h('span', menuItem.meta?.menuTitle)
        };
        const icon = menuItem.meta?.menuIcon;
        if (icon) {
          slots.default = () => h(
            ElIcon,
            { color: '#409EFC' },
            {
              default: () => h((ElementPlusIcon as unknown as Record<string, DefineComponent>)[icon])
            }
          );
        }

        return h(
          ElMenuItem,
          {
            index: menuItem.name as string
          },
          slots
        );
      }
      return undefined;
    }

    function createSubMenu(menuItem: RouteRecordWithChildrenRaw): VNode {
      const len = menuItem.children.length;
      const vns: VNode[] = [];
      for (let i = 0; i < len; i += 1) {
        const node = createMenuItem(menuItem.children[i]);
        if (node) {
          vns.push(node);
        }
      }
      return h(
        ElSubMenu,
        {
          index: menuItem.name as string
        },
        {
          default: () => vns,
          title: () => {
            const icon = menuItem.meta?.menuIcon;
            const slot = [h('span', menuItem.meta?.menuTitle)];
            if (icon) {
              slot.unshift(
                h(
                  ElIcon,
                  { color: '#409EFC' },
                  {
                    default: () => h((ElementPlusIcon as unknown as Record<string, DefineComponent>)[icon])
                  }
                )
              );
            }
            return slot;
          }
        }
      );
    }

    props.menuList.forEach((_) => {
      const node = createMenuItem(_);
      if (node) {
        vnodes.push(node);
      }
    });
    return () => h(
      ElMenu,
      {
        collapse: props.collapse,
        router: true,
        backgroundColor: '#545c64',
        textColor: '#ffffff',
        activeTextColor: '#ffd04b',
        defaultActive: props.current
      },
      {
        default: () => vnodes
      }
    );
  }
});

export default defineComponent({
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const sideBarModel = reactive({
      active: '/',
      isCollapse: true
    });
    const route = useRoute();
    const currentMenuItem = route.name as string;
    return {
      sideBarModel,
      menuList: routes,
      currentMenuItem
    };
  },
  components: {
    Menu
  },
  methods: {
    onClickCollapse() {
      this.sideBarModel.isCollapse = !this.sideBarModel.isCollapse;
    },
    handleOpen(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    },
    handleClose(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    }
  }
});
</script>

<style lang="scss" scoped>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
// 选中的菜单也标注黄色
:v-deep(.el-menu) {
  border: none !important;
  .el-sub-menu {
    &.is-active {
      .el-sub-menu__title {
        color: #ffd04b !important;
      }
    }
  }
}
.menu-container-container {
  height: 100vh;
  .aside {
    width: auto;
    background: #545c64;
    .logo {
      width: 64px;
      line-height: 56px;
      cursor: pointer;
      transition: width 0.1s;
    }
    .logo-expand {
      width: 200px;
    }
    .menu-wrap {
      width: auto;
      background: #ffffff;
    }
  }
  .header {
    width: auto;
    background: #545c64;
    height: 56px;
  }
}
</style>
