/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2021-05-20 14:57:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/main.js
 */
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import './icons'
import router from './router'
import '@/permission' // permission control
import './directive'

Vue.use(ElementUI, { locale })

// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
