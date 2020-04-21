<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="1"
      id="appbar"
    >
      <div class="d-flex align-center">
        <VinaigretteLogo :size="40" transparent />

        <router-link to="/"><h1 class="ml-2 white--text">Vinaigrette</h1></router-link>
      </div>
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

  data: () => ({
    //
  })
}
</script>

<style>
#appbar {
  max-width: 100vw;
}
</style>
