import Vue from 'vue'
import Vuex from 'vuex'
import VueSocketIO from 'vue-socket.io'
import VueAxios from 'vue-axios'
import VueSweetAlert2 from 'vue-sweetalert2'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@sweetalert2/theme-dark/dark.min.css'

import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import App from './App.vue'

import { serverUrl } from '@/config'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(new VueSocketIO({
  debug: true,
  connection: serverUrl,
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  }
}))

Vue.use(VueAxios, axios)

Vue.use(VueSweetAlert2)

Vue.use(VueCookies)

Vue.$cookies.config('30d')

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
