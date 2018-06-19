import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/GeneralViews/Home'
import Login from '@/components/Authentication/Login'
import Admin from '@/components/SuperUsers/Admin/Admin'
import Teacher from '@/components/SuperUsers/Teacher/Teacher'
import NotFound from '@/components/GeneralViews/NotFoundPage'

import AuthMiddleware from '../services/middleware'
import interceptors from '../services/interceptors'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: AuthMiddleware.isAdmin,
    },

    {
      path: '/professor/:targetName',
      name: 'Professor',
      component: Teacher,
    },

    { path: '*', component: NotFound }

  ]
})

export default router;