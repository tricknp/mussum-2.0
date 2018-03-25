import Vue from 'vue'
import Router from 'vue-router'

import mHeader from '@/components/Header/mHeader'
import SideNav from '@/components/Aside/SideNav'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Aside',
      component: SideNav
    },
  ]
})
