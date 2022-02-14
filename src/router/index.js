import Vue from 'vue'
import Router from 'vue-router'
import { asyncRouter } from './asyncRouter'
Vue.use(Router)
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: '控制台',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '控制台', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/from',
    component: Layout,
    redirect: '/form',
    children: [
      {
        path: '/form',
        name: '表单',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'dashboard' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export const asyncRouterMap = asyncRouter

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
