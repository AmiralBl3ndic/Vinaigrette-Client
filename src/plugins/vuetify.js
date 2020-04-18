import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2E2C2C',
        secondary: '#FFCB3C',
        accent: '#FF5757',
        error: '#E24A34',
        info: '#46A7A8',
        success: '#73C657',
        warning: '#FFAC00'
      }
    }
  },
  icons: {
    iconfont: 'fa'
  }
})
