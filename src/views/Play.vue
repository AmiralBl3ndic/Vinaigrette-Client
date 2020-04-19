<template>
  <div class="fill-height d-flex">

    <v-container>
      <StartGameButton />
    </v-container>

    <Scoreboard style="flex-basis: 300px" />
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue'
import StartGameButton from '@/components/StartGameButton.vue'

export default {
  name: 'Play',

  components: {
    Scoreboard,
    StartGameButton
  },

  beforeDestroy () {
    this.$socket.emit('leave_room', { roomName: this.$store.state.currentRoom })
  }
}
</script>
