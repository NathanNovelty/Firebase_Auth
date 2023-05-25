// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'
Vue.config.productionTip = false
var config = {
  apiKey: 'AIzaSyBESja7jALU0g8_B3i665-oGduaQ-Z521E',
  authDomain: 'authentication-3aa7a.firebaseapp.com',
  databaseURL: 'https://authentication-3aa7a.firebaseio.com',
  projectId: 'authentication-3aa7a',
  storageBucket: 'authentication-3aa7a.appspot.com',
  messagingSenderId: '63904781319'
}
let firebaseApp = Firebase.initializeApp(config)
let db = firebaseApp.database()
let firebaseStore = require('firebase')
require('firebase/storage')
var store = firebaseStore.firestore
Vue.use(function (V) {
  V.prototype.$db = () => db
})
Vue.use(function (V) {
  V.prototype.$store = () => store
})
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
