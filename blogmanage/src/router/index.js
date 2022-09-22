import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      isMenu: false,
      isAuth: false,
      keepAlive: false
    },
    component: () => import('@/views/login/LoginPage'),
  },
  {
    path: '/',
    title: '',
    meta: {
    },
    redirect: '/home',
    component: () => import('@/layout/BasicLayout'),
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
        path: '/manageatricles',
        name: 'manageatricles',
        meta: {
          title: '管理文章',
          isMenu: true,
          isBreadcrumb: true,
          isAuth: true,
          keepAlive: false,
          transition: 'fade',
        },
        component: () => import('@/views/manage/ManageArticles'),
      },
      {
        path: '/managetimelines',
        name: 'managetimelines',
        meta: {
          title: '管理时间轴',
          isMenu: true,
          isBreadcrumb: true,
          isAuth: true,
          keepAlive: false,
          transition: 'fade',
        },
        component: () => import('@/views/manage/ManageTimelines'),
      },
      {
        path: '/pulisharticles',
        name: 'pulisharticles',
        meta: {
          title: '发表文章',
          isMenu: true,
          isBreadcrumb: true,
          isAuth: true,
          keepAlive: false,
          transition: 'fade',
        },
        component: () => import('@/views/manage/PulishArticle'),
      },
      {
        path: '/logout',
        name: 'logout',
        meta: {
          title: '登出',
          isMenu: true,
          isAuth: false,
          keepAlive: false
        },
        component: () => import('@/views/logout/LogoutPage'),
      },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
