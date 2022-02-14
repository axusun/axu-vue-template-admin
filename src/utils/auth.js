/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2021-05-19 11:58:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/utils/auth.js
 */

const TokenKey = 'BY_userToken'

export function getToken() {
  return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return window.localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return window.localStorage.removeItem(TokenKey)
}
