/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 16:10:48
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-08 17:36:32
 */
import { ref } from 'vue';

// 账号密码登录模型
export const createLoginByPassModel = (tel = '', pass = '') => ref({
  tel,
  pass,
});

// 账号密码登录方法
export const loginByPass = (tel: string, pass: string) => new Promise((resolve) => {
  // todo
  resolve('');
});
