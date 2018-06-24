import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/sass/app.scss'
import 'vue-blu/dist/css/vue-blu.min.css'

import axios from 'axios';
import VueBlu from 'vue-blu'
import VueProgressBar from 'vue-progressbar'

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

Vue.use(VueProgressBar, {
  location: 'top',  
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px',
})  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
