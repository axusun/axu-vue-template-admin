/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2021-05-19 18:47:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/utils/get-page-title.js
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || '管理后台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
