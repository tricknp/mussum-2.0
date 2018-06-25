import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/GeneralViews/Home'
import Login from '@/components/Authentication/Login'
import Admin from '@/components/SuperUsers/Admin/Admin'
import Teacher from '@/components/SuperUsers/Teacher/Teacher'
import NotFound from '@/components/GeneralViews/NotFoundPage'
import Form from '@/components/GeneralViews/FormFeedback'
import Tabs from '@/components/UIComponents/Tabs'

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
      redirect: { name: 'Dir' },
      children:[
        {
          name: 'Dir',
          path: '/professor/:targetName/diretorios',
          component: Tabs
        },

        {
          name: 'Recados',
          path: '/professor/:targetName/recados',
          component: Tabs
        },

        {
          name: 'Sobre',
          path: '/professor/:targetName/sobre',
          component: Tabs
        }
      ]
    },

    {
      path: '/form',
      component: Form
    },

    { path: '*', component: NotFound }

  ]
})

export default router;
