import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

import './assets/sass/app.scss'
import 'vue-blu/dist/css/vue-blu.min.css'

import VueResource from "vue-resource"
import VueBlu from 'vue-blu'
import LiquorTree from 'liquor-tree'

Vue.use(VueBlu)
Vue.use(VueResource)
Vue.use (LiquorTree)

Vue.config.productionTip = false

const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
