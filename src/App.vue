<template>
  <div id="app">
    Hello Vue3
  </div>
  <hello-vue />
</template>

<script>
import HelloVue from '@/components/HelloVue'
export default {
  name: 'App',
  components: {
    HelloVue
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
