<template>
  <div class="fill-height d-flex">

    <v-container>
      <h1 class="display-4">Play view</h1>

      <v-btn to="/" color="accent">
        Go back to home
      </v-btn>
    </v-container>

    <Scoreboard style="flex-basis: 300px" />
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue'

export default {
  name: 'Play',

  components: {
    Scoreboard
  },

  beforeDestroy () {
    this.$socket.emit('leave_room', { roomName: this.$store.state.currentRoom })
  }
}
</script>
