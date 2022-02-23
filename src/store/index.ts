/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-08 09:54:25
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-23 17:57:02
 */
import { createStore } from 'vuex';
import { VuexState } from './types';
import mutations from './mutations';

export default createStore<VuexState>({
  state: {
    token: '',
    userInfo: null
  },
  mutations,
  actions: {},
  modules: {}
});
