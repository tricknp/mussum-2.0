import Vue from 'vue'
import Router from 'vue-router'

import '@/assets/css/app.css'

import Home from '@/components/GeneralViews/Home'
import Login from '@/components/Authentication/Login'
import Admin from '@/components/SuperUsers/Admin/Admin'
import Teacher from '@/components/SuperUsers/Teacher/Teacher'
import NotFound from '@/components/GeneralViews/NotFoundPage'

Vue.use(Router)

export default new Router({
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
      meta: {auth: false}
    },

    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {auth: true}
    },

    {
      path: '/professor',
      name: 'Professor',
      component: Teacher,
      meta: {auth: true}
    },

    { path: '*', component: NotFound }


  ]
})
