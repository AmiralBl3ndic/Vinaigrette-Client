<template>
  <div class="fill-height d-flex">

    <v-container class="fill-height d-flex flex-row justify-space-between" :class="{'align-end': !gameStarted}">
      <ImageSauce v-if="displayImageSauce" />
      <QuoteSauce v-if="displayQuoteSauce" />

      <StartGameButton class="" />
    </v-container>

    <Scoreboard style="flex-basis: 300px" />
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue'
import StartGameButton from '@/components/StartGameButton.vue'
import ImageSauce from '@/components/ImageSauce.vue'
import QuoteSauce from '@/components/QuoteSauce.vue'

export default {
  name: 'Play',

  components: {
    Scoreboard,
    StartGameButton,
    ImageSauce,
    QuoteSauce
  },

  computed: {
    displayImageSauce () {
      return this.$store.getters.currentSauceType === 'image'
    },

    displayQuoteSauce () {
      return this.$store.getters.currentSauceType === 'quote'
    },

    gameStarted () {
      return this.$store.state.gameStarted
    }
  },

  beforeDestroy () {
    this.$socket.emit('leave_room', { roomName: this.$store.state.currentRoom })
  }
}
</script>
