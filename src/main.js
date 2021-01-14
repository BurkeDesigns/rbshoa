import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Nav from './components/Nav.vue'
import Slideshow from './components/Slideshow.vue'
import NewsList from './components/NewsList.vue'
import Footer from './components/Footer.vue'

Vue.component('Nav', Nav)
Vue.component('Slideshow', Slideshow)
Vue.component('NewsList', NewsList)
Vue.component('Footer', Footer)

const fb = require('./firebaseConfig.js')

let app
fb.auth.onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})


