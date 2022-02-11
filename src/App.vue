<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-11 10:42:08
-->
<template>
  <MenuContainer v-if="isInMenu">
    <router-view />
  </MenuContainer>
  <router-view v-else />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MenuContainer from '@/components/ui/MenuContainer.vue';

const currentRoute = useRoute();
const isInMenu = computed(() => currentRoute.meta.isInMenu);
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
