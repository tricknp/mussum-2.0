import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/sass/app.scss'
import 'vue-blu/dist/css/vue-blu.min.css'

import VueResource from "vue-resource"
import VueBlu from 'vue-blu'
import LiquorTree from 'liquor-tree'
import axios from 'axios';

Vue.use(VueBlu)
Vue.use(VueResource)
<<<<<<< HEAD
Vue.use(LiquorTree)
=======
Vue.use (LiquorTree)

>>>>>>> 6584cee72c2664b756557b4f797cee87e3c6a36d
Vue.config.productionTip = false

const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})
<<<<<<< HEAD
=======



>>>>>>> 6584cee72c2664b756557b4f797cee87e3c6a36d
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
