/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-09 11:54:51
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
