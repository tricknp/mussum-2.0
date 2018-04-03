import Vue from 'vue'
import Router from 'vue-router'

import '@/assets/css/app.css'
import Vuetify from 'vuetify'

import Header from '@/components/Header/Header'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Header
    }
  ]
})
