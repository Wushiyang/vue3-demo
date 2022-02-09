/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-09 08:07:36
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-09 15:43:33
 */
import { VNode } from 'vue';
import { _RouteRecordBase } from 'vue-router';

declare module 'vue-router' {
  interface _RouteRecordBase {
    isInMenu?: boolean;
    menuTitle?: string | Node;
    menuIcon?: VNode | Node;
  }
}
