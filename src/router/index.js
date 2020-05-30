import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/main',
    name: 'Main',
    component: () => import('../views/main.vue'),

    // 二级路由
    children: [{
        path: '/home',
        name: 'Home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('../views/category.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my.vue')
      },
      {
        path: '/like',
        name: 'Like',
        component: () => import('../views/like.vue')
      }
    ]
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('../views/start.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/detail.vue')
  },
  {
    path: '/goods/:classid',
    name: 'Goods',
    component: () => import('../views/goods.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = new VueRouter({
  routes
})


export default router
