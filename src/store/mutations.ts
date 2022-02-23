/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-23 17:38:29
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-23 17:59:12
 */
import { LOGIN } from '@/assets/constant/mutations';
import { VuexState, UserInfo } from './types';

export default {
  [LOGIN](state: VuexState, data: { token: string; userInfo: UserInfo }) {
    const { token, userInfo } = data;
    state.token = token;
    state.userInfo = userInfo;
  }
};
