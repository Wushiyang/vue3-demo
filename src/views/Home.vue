<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-11 11:00:47
-->
<template>
  <div class="home">
    home
    <button @click="toLogin">go to login</button>
    <!-- <el-icon color="#409EFC" class="no-inherit">
      <HomeFilled />
    </el-icon> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  components: {},
  methods: {
    toLogin() {
      this.$router.push('/login');
    }
  }
});
</script>
