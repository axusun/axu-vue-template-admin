/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2021-05-21 13:48:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/api/user.js
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'api/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'api/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'api/logout',
    method: 'post'
  })
}

export function getUserMenu() {
  return request({
    url: 'api/menu_permissions',
    method: 'get'
  })
}
