<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 17:08:18
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-09 18:13:34
-->
<template>
  <el-container class="menu-container-container">
    <el-aside style="background: #000000; width: auto">
      <div style="height: 56px; cursor: pointer" @click="onClickCollapse">Collapse</div>
      <Menu :menuList="menuList" :collapse="sideBarModel.isCollapse"></Menu>
    </el-aside>
    <el-container>
      <el-header style="height: 56px; background: #000000">头部</el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
/* eslint-disable-next-line */
/// <reference
// path="../../extension/router.d.ts"/>
import {
  defineComponent, reactive, h, PropType, VNode,
} from 'vue';
// import { buildSlots } from '@vue/compiler-core';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { RouteRecordRaw } from 'vue-router';
// import { BuildPropReturn, PropWrapper } from '_element-plus@2.0.1@element-plus/es/utils/props';
import { routes } from '@/router';

type RouteRecordWithChildrenRaw = {
  children: RouteRecordRaw;
} & RouteRecordRaw;

const Menu = defineComponent({
  props: {
    menuList: {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const vnodes: VNode[] = [];

    function createMenuItem(menuItem: RouteRecordRaw): VNode | undefined {
      if (menuItem.isInMenu && menuItem.name) {
        if (menuItem.children) {
          /* eslint-disable-next-line */
          return createSubMenu(menuItem as RouteRecordWithChildrenRaw);
        }
        return h(
          ElMenuItem,
          {
            index: menuItem.name as string,
          },
          [menuItem.menuIcon, menuItem.menuTitle],
        );
      }
      return undefined;
    }

    function createSubMenu(menuItem: RouteRecordWithChildrenRaw): VNode {
      const len = menuItem.children.length;
      const vns = [];
      for (let i = 0; i < len; i += 1) {
        const node = createMenuItem(menuItem.children[i]);
        if (node) {
          vns.push(node);
        }
      }
      return h(
        ElSubMenu,
        {
          index: menuItem.name as string,
        },
        vns,
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
      },
      vnodes,
    );
  },
});

export default defineComponent({
  setup() {
    const sideBarModel = reactive({
      active: '/',
      isCollapse: true,
    });
    return {
      sideBarModel,
      menuList: routes,
    };
  },
  components: {
    // Location,
    // Document,
    // IconMenu,
    // Setting,
    Menu,
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
    },
  },
});
</script>

<style>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
</style>
