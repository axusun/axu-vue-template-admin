/*
 * @Author: axu
 * @Date: 2021-05-19 11:38:11
 * @LastEditTime: 2021-05-19 18:49:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/utils/validate.js
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
