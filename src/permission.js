/*
 * @Author: axu
 * @Date: 2020-08-30 07:59:10
 * @LastEditTime: 2022-02-14 17:40:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/permission.js
 */
import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // 获取用户信息，根据业务情况配置
          // await store.dispatch('user/getInfo')
          // 动态路由权限配置
          // store.dispatch('permission/GenerateRoutes').then(() => {
          //   router.addRoutes(store.getters.routers)
          //   next({ ...to, replace: true })
          // })
          next();
        } catch (error) {
          // 清空用户相关信息
          // await store.dispatch("user/resetToken");
          Message.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
