/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-11 10:22:24
 */
import { h } from 'vue';
import {
  createRouter, createWebHistory, RouteRecordRaw, RouterView
} from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    name: '/home',
    meta: {
      isInMenu: true,
      menuIcon: 'HomeFilled',
      menuTitle: '首页'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
  {
    path: '/form',
    name: '/form',
    component: h(RouterView),
    meta: {
      isInMenu: true,
      menuIcon: 'Menu',
      menuTitle: '表单'
    },
    children: [
      {
        path: 'cascader',
        name: '/form/cascader',
        meta: {
          isInMenu: true,
          menuTitle: '级联选择器'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/form/Cascader.vue')
      },
      {
        path: 'checkbox',
        name: '/form/checkbox',
        meta: {
          isInMenu: true,
          menuTitle: '多选框'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/form/Checkbox.vue')
      }
    ]
  },
  {
    path: '/dataShow',
    name: '/dataShow',
    component: h(RouterView),
    meta: {
      isInMenu: true,
      menuTitle: '数据展示',
      menuIcon: 'DataBoard'
    },
    children: [
      {
        path: 'avatar',
        name: '/dataShow/avatar',
        meta: {
          isInMenu: true,
          menuTitle: '头像'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/dataShow/Avatar.vue')
      },
      {
        path: 'badge',
        name: '/dataShow/badge',
        meta: {
          isInMenu: true,
          menuTitle: '徽章'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/dataShow/Badge.vue')
      }
    ]
  },
  {
    path: '/settings',
    name: '/settings',
    meta: {
      isInMenu: true,
      menuTitle: '设置',
      menuIcon: 'Setting'
    },
    component: h(RouterView),
    children: [
      {
        path: 'system',
        name: '/settings/system',
        meta: {
          isInMenu: true,
          menuTitle: '系统设置'
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/settings/System.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/auth/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
