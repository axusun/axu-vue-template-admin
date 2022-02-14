/*
 * @Author:axu
 * @Date: 2021-05-19 16:22:51
 * @LastEditTime: 2022-02-14 17:40:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-template-master/src/router/asyncRouter.js
 */
import Layout from "@/layout";

export const asyncRouter = [
  {
    path: "/userlist",
    component: Layout,
    redirect: "/userlist/list",
    meta: { title: "用户管理", icon: "dashboard" },
    children: [
      {
        path: "/userlist/list",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "用户管理", icon: "dashboard" }
      }
    ]
  }
];
