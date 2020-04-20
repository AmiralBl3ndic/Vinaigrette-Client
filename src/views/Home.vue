<template>
  <div id="home-view">
    <v-row class="text-center hero">
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

    <div class="rooms">
      <RoomSelector />
    </div>

    <div class="links">
      <router-link to="contribute" class="title font-weight-regular light--text">Contribute to Vinaigrette</router-link>
    </div>
  </div>
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
    this.$socket.emit('set_username', { username: 'Camille' })
  }
}
</script>

<style>
#home-view {
  box-sizing: border-box;
  width: 100vw; max-width: 100vw;
  height: 100%;

  display: grid !important;

  grid-template-areas:
    "hero"
    "rooms"
    "links";

  grid-template-rows: auto auto 40px;

  overflow: hidden;
}

.hero {
  grid-area: hero;
}

.rooms {
  grid-area: rooms;
}

.links {
  grid-area: links;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
}

</style>
