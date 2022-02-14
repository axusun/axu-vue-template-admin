/*
 * @Author: axu
 * @Date: 2021-05-19 14:27:47
 * @LastEditTime: 2021-05-19 18:42:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/store/modules/permission.js
 */
import { constantRoutes, asyncRouterMap } from '@/router'
import { getUserMenu } from '@/api/user'

const checkAuth = (localMenu, serverMenu) => {
  const menus = localMenu.filter(item => {
    let trueItem = null
    if (item.noAuth) {
      trueItem = item
    } else if (serverMenu) {
      const menu = serverMenu.find(menu => {
        return menu.url === item.path
      })
      if (menu) {
        trueItem = Object.assign(item, { sub: menu.sub })
        if (item.children && menu.sub.length > 0) {
          trueItem.children = checkAuth(item.children, menu.sub)
        }
      }
    }
    return trueItem || null
  })
  return menus.filter(menu => !!menu)
}

const getDefaultState = () => {
  return {
    routers: constantRoutes,
    addRouters: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRoutes
      .concat(routers)
      .concat([{ path: '*', redirect: '/404', hidden: true }])
  }
}

const actions = {
  GenerateRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      getUserMenu(state.token)
        .then(response => {
          const { data } = response
          if (!data) {
            return reject('异常')
          }
          const router = checkAuth(asyncRouterMap, data)
          commit('SET_ROUTERS', router)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
