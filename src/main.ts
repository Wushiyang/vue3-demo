/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-08 17:18:51
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css';

createApp(App).use(store).use(router).use(ElementPlus)
  .mount('#app');
