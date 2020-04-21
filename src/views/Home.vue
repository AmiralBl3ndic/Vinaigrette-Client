<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" justify="center">
        <v-row align="center">
          <VinaigretteLogo :size="300" />
        </v-row>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-3 font-weight-bold mb-3 light--text">
          Welcome to Vinaigrette
        </h1>
      </v-col>
    </v-row>

    <v-container>
      <RoomSelector />
    </v-container>

    <v-container fluid id="contribute">
      <router-link to="contribute" class="title font-weight-regular light--text">Contribute to Vinaigrette</router-link>
    </v-container>
  </v-container>
</template>

<script>
import VinaigretteLogo from '@/components/VinaigretteLogo.vue'
import RoomSelector from '@/components/RoomSelector.vue'

export default {
  name: 'Home',

  components: {
    VinaigretteLogo,
    RoomSelector
  },

  mounted () {
    this.$socket.emit('set_username', { username: 'Default' })
  }
}
</script>

<style scoped>
#contribute {
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>
