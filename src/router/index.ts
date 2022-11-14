/*
 * @Author: 秦弘林 1092750452@qq.com
 * @Date: 2022-09-19 23:09:35
 * @LastEditors: 秦弘林 1092750452@qq.com
 * @LastEditTime: 2022-09-30 09:34:59
 * @FilePath: \vue3-trip\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/city',
    component: () => import('@/views/city'),
  },
  {
    path: '/detail',
    component: () => import('@/views/detail'),
  },
  {
    path: '/favor',
    component: () => import('@/views/favor'),
  },
  {
    path: '/home',
    component: () => import('@/views/home'),
  },
  {
    path: '/mine',
    component: () => import('@/views/mine'),
  },
  {
    path: '/order',
    component: () => import('@/views/order'),
  },
  {
    path: '/search',
    component: () => import('@/views/search'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
