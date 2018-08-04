import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/sass/app.scss'
import 'vue-blu/dist/css/vue-blu.min.css'

import VueBlu from 'vue-blu'
import VueProgressBar from 'vue-progressbar'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.use(VueBlu)

Vue.config.productionTip = true

const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

Vue.use(VueProgressBar, {
  position: 'absolute',
  thickness: '3px',
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  //height: '3px',
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
