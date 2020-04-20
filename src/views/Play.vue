<template>
  <div class="fill-height d-flex">

    <v-container class="fill-height d-flex flex-row justify-space-between" :class="{'align-end': !gameStarted}">
      <div v-if="roundRunning" id="timer">
        <span class="light--text">{{ remainingTime }}s remaining</span>
      </div>

      <ImageSauce v-if="displayImageSauce" />
      <QuoteSauce v-if="displayQuoteSauce" />

      <AnswerInputField v-if="gameStarted && !found" />

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
import AnswerInputField from '@/components/AnswerInputField.vue'

export default {
  name: 'Play',

  components: {
    Scoreboard,
    StartGameButton,
    ImageSauce,
    QuoteSauce,
    AnswerInputField
  },

  data () {
    return {
      remainingTime: 0,
      roundRunning: false,
      found: false
    }
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

  sockets: {
    timer_update (remainingTime) {
      this.remainingTime = remainingTime
    },

    new_round_sauce () {
      this.roundRunning = true
      this.found = false
    },

    round_end () {
      this.roundRunning = false
    },

    good_answer () {
      this.found = true
    }
  },

  beforeDestroy () {
    this.$socket.emit('leave_room', { roomName: this.$store.state.currentRoom })
  }
}
</script>

<style>
#timer {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
