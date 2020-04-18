<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="1"
    >
      <div class="d-flex align-center">
        <VinaigretteLogo :size="40" transparent />

        <h1>Vinaigrette</h1>
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
