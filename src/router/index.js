import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

// 通用页面
export const constRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        name: 'home',
        meta: {
          title: 'Home',
          icon: 'qq'
        }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/About.vue'),
        name: 'about',
        meta: {
          title: 'About',
          icon: 'qq',
          roles: ['admin', 'editor']
        }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes: constRoutes
})
