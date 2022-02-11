<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 17:08:18
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-11 10:43:41
-->
<template>
  <el-container class="menu-container-container">
    <el-aside style="background: #000000; width: auto">
      <div style="height: 56px; cursor: pointer" @click="onClickCollapse">Collapse</div>
      <Menu :menuList="menuList" :collapse="sideBarModel.isCollapse"></Menu>
    </el-aside>
    <el-container>
      <el-header style="height: 56px; background: #000000">头部{{ num }}</el-header>
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
import { RouteRecordRaw } from 'vue-router';
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
        router: true
        // backgroundColor: '#333333',
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
  setup(prop) {
    const sideBarModel = reactive({
      active: '/',
      isCollapse: true
    });
    return {
      sideBarModel,
      menuList: routes
    };
  },
  components: {
    // Location,
    // Document,
    // IconMenu,
    // Setting,
    Menu
  },
  methods: {
    // handleClick() {
    //   this.$emit('update', this.$props.num + 1);
    // },
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

<style>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
</style>
