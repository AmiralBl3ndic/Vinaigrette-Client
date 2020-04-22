<template>
  <v-img
    :src="image"
    :height="size"
    :width="size"
    contain
  />
</template>

<script>
const logo = require('../assets/vinaigrette-logo.svg')

export default {
  name: 'VinaigretteLogo',

  props: {
    size: {
      type: Number,
      required: true
    }
  },

  computed: {
    image () {
      return logo
    }
  }
}
</script>
