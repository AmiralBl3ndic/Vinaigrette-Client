<template>
  <div id="play-view" class="fill-height d-flex">

    <div class="top-row mx-15">
      <span v-if="roundRunning" class="light--text">{{ remainingTime }}s remaining</span>
    </div>

    <v-container class="content p0">
      <div class="sauce-zone">
        <ImageSauce v-if="displayImageSauce" class="maxw-100" />

        <QuoteSauce v-if="displayQuoteSauce" />

        <AnswerInputField v-if="gameStarted && !found" class="align-self-end px-12" />
      </div>

      <StartGameButton class="align-self-end mx-12 start-game-button" />
    </v-container>

    <Scoreboard class="scoreboard" />
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
#play-view {
  box-sizing: border-box;
  display: grid !important;

  width: 100vw;
  max-width: 100vw;

  grid-template-areas:
    "top-row scoreboard"
    "content scoreboard";

  grid-template-columns: 4fr 1fr;
  grid-template-rows: 1fr 9fr;
}

.top-row {
  grid-area: top-row;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 !important;
}

.sauce-zone {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.scoreboard {
  grid-area: scoreboard;
  max-width: 100vw;
}

.maxw-100 {
  max-width: 100vw;
  padding: 0;
}

@media screen and (max-width: 780px) {
  #play-view {
    grid-template-areas:
      "top-row"
      "content"
      "scoreboard";

    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;

  }
}

@media screen and (min-width: 781px) {
  #play-view {
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 75% 25%;
  }
}
</style>
