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

    </v-app-bar>

    <div>
      <input type="text" name="username" v-model="input.username" placeholder="Username"/>
      <button type="button" v-on:click="login()">Login</button>
    </div>

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
    login () {
      this.$socket.emit('set_username', { username: this.username })
    }
  },

  data: () => ({

  })
}
</script>
