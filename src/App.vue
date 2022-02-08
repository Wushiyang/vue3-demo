<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-08 17:47:04
-->
<template>
  <MenuContainer>
    <router-view />
  </MenuContainer>
</template>

<script lang="ts" setup>
import MenuContainer from '@/components/ui/MenuContainer.vue';
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
