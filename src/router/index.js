import Vue from 'vue'
import Router from 'vue-router'

import mHeader from '@/components/mHeader'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Register',
      component: Register
    },
  ]
})
