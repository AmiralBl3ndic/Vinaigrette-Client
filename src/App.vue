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

    <div class="mt-4 mb-3">
      <Popup />
    </div>

    </v-app-bar>

    <v-content class="secondary">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import VinaigretteLogo from '@/components/VinaigretteLogo.vue'
import Popup from '@/components/Popup.vue'

export default {
  name: 'App',

  components: {
    VinaigretteLogo,
    Popup
  },
  data: () => ({

  })
}
</script>
