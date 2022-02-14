/*
 * @Author: axu
 * @Date: 2021-05-20 14:29:49
 * @LastEditTime: 2021-05-20 14:40:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/directive/index.js
 */
import Vue from 'vue'
Vue.directive('permission', {
  inserted(el, binding, vnode) {
    const { value } = binding
    const roles = ['admin'] // 当前用户的角色，可以同时拥有多个角色。通常从store中获取当前角色。store.getters && store.getters.roles;
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value
      const hasPermission = roles.some(role => permissionRoles.includes(role))

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
})
