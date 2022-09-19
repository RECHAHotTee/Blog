import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import("@/layout/BasicLayout"),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          isMenu: true,
          isBreadcrumb: true,
          isAuth: true,
          keepAlive: false,
          transition: 'fade',
        },
        component: () => import('@/views/home/HomePage'),
      },
      {
        path: '/list',
        name: 'list',
        meta: {
          title: '文章列表',
          isMenu: true,
          isBreadcrumb: true,
          isAuth: true,
          keepAlive: false,
          transition: 'fade',
        },
        component: () => import('@/views/list/ListPage'),
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '热茶 RECHA',
          isMenu: true,
          isBreadcrumb: true,
          isAuth: true,
          keepAlive: false,
          transition: 'fade',
        },
        component: () => import('@/views/user/UserPage'),
      },
      {
        path: '/article',
        name: 'article',
        meta: {
          title: '文章详情',
          isMenu: false,
          isBreadcrumb: true,
          isAuth: true,
          keepAlive: false,
          transition: 'fade',
        },
        component: () => import('@/views/article/ArticlePage'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
