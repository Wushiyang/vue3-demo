<template>
  <div>hello Vue</div>
  <div class="red">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Hello Vue',
  data() {
    return {
      msg: '你好 Vue'
    }
  }
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
