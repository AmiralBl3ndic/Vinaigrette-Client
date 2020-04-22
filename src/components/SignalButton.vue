<template>
  <v-tooltip right >
    <template v-slot:activator="{ on }">
      <v-icon @click.stop="sendSignal" v-on="on" v-show = "show">far fa-bell</v-icon>
    </template>
    <span>Report Sauce</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'SignalButton',

  props: {
    show: Boolean
  },

  methods: {
    sendSignal () {
      this.$socket.emit('report_sauce')
      this.$emit('report')
    }
  }
}
</script>
