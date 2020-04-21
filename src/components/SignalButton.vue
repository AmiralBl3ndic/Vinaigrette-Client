<template>
  <div >
    <p>
     <v-icon @click.stop="sendSignal">far fa-bell</v-icon>
     Report Sauce</p>
  </div>
</template>

<script>
export default {
  name: 'SignalButton',

  methods: {
    sendSignal () {
      this.$socket.emit('report_sauce')
      this.$emit('report')
    }
  }
}
</script>
