<template>
  <v-btn v-if="!gameStarted" color="accent" block class="py-8 title" @click.prevent="sendStartGameSignal">
    Start Game
  </v-btn>
</template>

<script>
export default {
  name: 'StartGameButton',

  computed: {
    gameStarted () {
      return this.$store.state.gameStarted
    }
  },

  methods: {
    sendStartGameSignal () {
      if (!this.gameStarted) {
        this.$socket.emit('start_game', { roomName: this.$store.state.currentRoom })
      }
    }
  }
}
</script>
