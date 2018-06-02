import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/sass/app.scss'
import 'vue-blu/dist/css/vue-blu.min.css'

import axios from 'axios';
import VueBlu from 'vue-blu'

Vue.use(VueBlu)
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
