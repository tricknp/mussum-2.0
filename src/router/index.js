import Vue from 'vue'
import Router from 'vue-router'

import '@/assets/css/app.css'
import Vuetify from 'vuetify'

import Home from '@/components/Home'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
