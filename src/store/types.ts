/*
 * @Description:
 * @Version: 2.0
 * @Autor: wushiyang
 * @Date: 2022-02-23 17:56:05
 * @LastEditors: wushiyang
 * @LastEditTime: 2022-02-23 17:56:05
 */
export interface VuexState {
  token: string;
  userInfo: UserInfo | null;
}
export interface UserInfo {
  name: string;
  account: string;
  tel: number;
  avatar: string;
}
