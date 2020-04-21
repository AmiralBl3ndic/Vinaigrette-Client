<template>
  <div v-if="showreportbutton" >
    <p>
     <v-icon @click.stop="saucereported=true">far fa-bell</v-icon>
     Report Sauce</p>
  </div>
</template>

<script>
export default {
  name: 'SignalButton',

  computed: {
    gameStarted () {
      return this.$store.state.gameStarted
    },

    showreportbutton () {
      return this.gameStarted && !this.saucereported
    }
  },

  methods: {
    sendSignal () {
      this.$socket.emit('report_sauce')
      this.$emit('report')
    }
  }
}
</script>
