<template>
  <div id="play-view" class="fill-height d-flex">

    <v-layout wrap my-2>
      <v-flex xs4 px-2>
        <SignalButton @report="() => {this.saucereported = true}" :show="gameStarted && !saucereported" class="signal_button" />
        <p v-show="gameStarted && saucereported" class="signal_button px-2"> Thank you for your report </p>
      </v-flex>
      <v-flex xs4 class = "d-flex justify-center">
        <span v-if="roundRunning" class="light--text">{{ remainingTime }}s remaining</span>
      </v-flex>
      <v-flex xs4> </v-flex>
    </v-layout>

    <v-container class="content p0 flex-column">
      <div class="sauce-zone">
        <div class="sauce">
          <ImageSauce v-if="displayImageSauce" />

          <QuoteSauce v-if="displayQuoteSauce" />
        </div>

        <AnswerInputField v-if="gameStarted && !found" class="answerbox px-12" />
      </div>

      <v-container>
        <StartGameButton class="full-width" />
      </v-container>
    </v-container>

    <Scoreboard class="scoreboard" />
    <Chat class="hide-on-small-screens" />
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue'
import StartGameButton from '@/components/StartGameButton.vue'
import ImageSauce from '@/components/ImageSauce.vue'
import QuoteSauce from '@/components/QuoteSauce.vue'
import AnswerInputField from '@/components/AnswerInputField.vue'
import SignalButton from '@/components/SignalButton.vue'
import Chat from '@/components/Chat.vue'

const vinaigretteLogoUrl = require('../assets/vinaigrette-logo.svg')

export default {
  name: 'Play',

  components: {
    Scoreboard,
    StartGameButton,
    ImageSauce,
    QuoteSauce,
    AnswerInputField,
    SignalButton,
    Chat
  },

  data () {
    return {
      remainingTime: 0,
      roundRunning: false,
      found: false,
      saucereported: false
    }
  },

  computed: {
    displayImageSauce () {
      return this.gameStarted && this.$store.getters.currentSauceType === 'image'
    },

    displayQuoteSauce () {
      return this.gameStarted && this.$store.getters.currentSauceType === 'quote'
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
      this.saucereported = false
    },

    round_end () {
      this.roundRunning = false
    },

    good_answer () {
      this.found = true
    },

    player_won ({ username, score }) {
      this.$swal({
        titleText: `${username} won!`,
        text: `${username} scored ${score} points`,
        imageUrl: vinaigretteLogoUrl,
        imageHeight: 200,
        imageWidth: 200,
        imageAlt: 'Vinaigrette logo',
        animation: true
      })
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
  height: 100%;
  width: 100%; max-width: 100%;

  display: grid;

  grid-template-areas:
    "sauce"
    "answerbox";

  grid-template-rows: 80% 20%;
  justify-items: center;
}

.sauce {
  grid-area: sauce;
  width: 100%; max-width: 100%;
  display: grid;
  justify-items: center;
}

.answerbox {
  grid-area: answerbox;
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

  .hide-on-small-screens {
    display: none;
  }
}

@media screen and (min-width: 781px) {
  #play-view {
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 75% 25%;
  }
}

.signal_button{
  position: absolute;
  left: 0;
}
</style>
