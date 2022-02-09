/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-09 18:13:57
 */
/* eslint-disable-next-line */
/// <reference path="../extension/router.d.ts"/>
import { ElIcon } from 'element-plus';
import { HomeFilled as IconHomeFilled, Menu as IconMenu } from '@element-plus/icons-vue';
import { h } from 'vue';
import {
  createRouter, createWebHistory, RouteRecordRaw, RouterView,
} from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    isInMenu: true,
    menuIcon: h(ElIcon, IconHomeFilled),
    menuTitle: '首页',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
  },
  {
    path: '/form',
    name: '/form',
    component: h(RouterView),
    isInMenu: true,
    children: [
      {
        path: 'cascader',
        name: '/form/cascader',
        isInMenu: true,
        // menuIcon: h(ElIcon, IconMenu),
        menuTitle: '级联选择器',
        component: () => import(/* webpackChunkName: "about" */ '@/views/form/Cascader.vue'),
      },
      {
        path: 'checkbox',
        name: '/form/checkbox',
        isInMenu: true,
        menuTitle: '多选框',
        component: () => import(/* webpackChunkName: "about" */ '@/views/form/Checkbox.vue'),
      },
    ],
  },
  {
    path: '/dataShow',
    name: '/dataShow',
    component: h(RouterView),
    isInMenu: true,
    children: [
      {
        path: 'avatar',
        name: '/dataShow/avatar',
        isInMenu: true,
        menuTitle: '头像',
        component: () => import(/* webpackChunkName: "about" */ '@/views/dataShow/Avatar.vue'),
      },
      {
        path: 'badge',
        name: '/dataShow/badge',
        isInMenu: true,
        menuTitle: '徽章',
        component: () => import(/* webpackChunkName: "about" */ '@/views/dataShow/Badge.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
