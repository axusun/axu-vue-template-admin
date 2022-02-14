/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2022-02-08 17:29:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/store/modules/user.js
 */
import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { mobile, password } = userInfo
    console.log(mobile, password)
    commit('SET_TOKEN', '112')
    setToken('112')

    // return new Promise((resolve, reject) => {
    //   login({ mobile: mobile.trim(), password: password })
    //     .then(response => {
    //       const { data } = response
    //       commit('SET_TOKEN', data.access_token)
    //       setToken(data.access_token)
    //       resolve()
    //     })
    //     .catch(error => {
    //       reject(error)
    //     })
    // })
  },

  getInfo({ commit, state }) {
    commit('SET_NAME', '测试')
    return
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { data } = response
          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          const { username, avatar } = data
          commit('SET_NAME', username)
          commit('SET_AVATAR', avatar)
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken()
          resetRouter()
          commit('RESET_STATE')
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
