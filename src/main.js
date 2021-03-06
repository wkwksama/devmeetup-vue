import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'

import App from './App'
import router from './router'
import DateFilter from './filters/date'
import { store } from './store'

import AlertComponent from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/EditDetailsDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComponent)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqaXMU15J_gi87tuDV4abCbEmStKDTDOo',
      authDomain: 'devmeetup-b59bb.firebaseapp.com',
      databaseURL: 'https://devmeetup-b59bb.firebaseio.com',
      projectId: 'devmeetup-b59bb',
      storageBucket: 'gs://devmeetup-b59bb.appspot.com/'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
