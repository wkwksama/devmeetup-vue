import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import DateFilter from './filters/date'
import { store } from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
