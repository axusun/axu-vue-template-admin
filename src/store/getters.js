/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2021-05-19 15:21:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/store/getters.js
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  routers: state => state.permission.routers
}
export default getters
