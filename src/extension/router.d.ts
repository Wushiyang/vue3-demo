/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-09 08:07:36
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-11 10:46:47
 */
import { DefineComponent, VNode } from 'vue';
import { RouteMeta } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    isInMenu?: boolean;
    menuIcon?: string;
    menuTitle?: string;
  }
}
