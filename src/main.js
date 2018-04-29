import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'
//import { auth } from '@/components/Authentication/auth.js'
//import { upload } from '@/components/Upload/upload.service.js' //true server
//import { upload } from '@/components/Upload/fake.upload.service.js'; //server for tests

import VueResource from "vue-resource"
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'


Vue.use(VueBlu)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

