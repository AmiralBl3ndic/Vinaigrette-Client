<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="1">

      <div class="d-flex align-center">
        <VinaigretteLogo :size="40" transparent />
        <router-link to="/"><h1 class="ml-2 white--text">Vinaigrette</h1></router-link>
      </div>

    <!-- <div class="mt-4 mb-3">
      <Popup />
    </div> -->

    </v-app-bar>

    <v-content class="secondary">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import VinaigretteLogo from '@/components/VinaigretteLogo.vue'

export default {
  name: 'App',

  components: {
    VinaigretteLogo
  },

  methods: {
    async showUsernameDialog (additionalMessage = '') {
      const { value: pseudo } = await this.$swal({
        title: 'Want a new username?',
        input: 'text',
        text: additionalMessage,
        inputPlaceholder: 'Enter your new username',
        inputValidator: (value) => {
          if (!value) {
            return 'You must choose a username'
          }
        },
        showCloseButton: false,
        allowOutsideClick: false
      })
      if (pseudo) {
        this.$socket.emit('set_username', { username: pseudo })
      }
    }
  },

  mounted () {
    const usernameFromCoookie = this.$cookies.get('username')

    if (usernameFromCoookie) { // If a username was stored in the cookies
      this.$socket.emit('set_username', { username: usernameFromCoookie })
    } else {
      this.showUsernameDialog()
    }
  },

  sockets: {
    username_not_available (username) {
      this.showUsernameDialog(`Sorry, "${username}" is not available for the moment`)
    }
  }
}
</script>
