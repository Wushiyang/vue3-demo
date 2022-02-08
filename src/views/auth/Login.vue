<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 11:08:20
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-08 17:35:22
-->
<template>
  <div class="page-container">
    <div class="form">
      <el-form ref="formRef" :model="formModel" label-width="80px">
        <el-form-item label="手机号">
          <el-input v-model="formModel.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formModel.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { createLoginByPassModel, loginByPass } from '@/services/auth';
// import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const formModel = createLoginByPassModel();
    return {
      formModel,
    };
  },
  methods: {
    async onSubmit() {
      await loginByPass(this.formModel.tel, this.formModel.pass);
      console.log('登录成功!');
    },
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  background: blue;
  width: 100%;
  height: 100vh;
  position: relative;
  .form {
    border: 1px solid #eeeeee;
    position: absolute;
    padding: 20px;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #eee;
  }
}
</style>
