<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 17:08:18
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-08 18:15:27
-->
<template>
  <el-container class="menu-container-container">
    <el-header>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import {
//   Location, Document, Menu as IconMenu, Setting,
// } from 'element-plus/icons-vue';

export default defineComponent({
  setup() {
    const isCollapse = ref(true);
    return {
      isCollapse,
    };
  },
  // components: {
  //   Location,
  //   Document,
  //   IconMenu,
  //   Setting,
  // },
  methods: {
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
