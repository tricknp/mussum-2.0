import Vue from 'vue'
import Router from 'vue-router'

import '@/assets/css/app.css'
import Vuetify from 'vuetify'


import Home from '@/components/GeneralViews/Home'
import Admin from '@/components/SuperUser/Admin/Admin'
import Teacher from '@/components/SuperUser/Teacher/Teacher'
import NotFound from '@/components/GeneralViews/NotFoundPage'

Vue.use(Vuetify)
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
