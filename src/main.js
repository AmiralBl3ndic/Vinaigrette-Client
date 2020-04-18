import Vue from 'vue'
import Vuex from 'vuex'
import VueSocketIO from 'vue-socket.io'
import VueSweetAlert2 from 'vue-sweetalert2'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import store from './store'

import '@sweetalert2/theme-dark/dark.min.css'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:1664',
  vuex: {
    store,
    actionPrefix: 'SOCKET_'
  }
}))

Vue.use(VueSweetAlert2)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
