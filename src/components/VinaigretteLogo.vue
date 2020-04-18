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
const transparentLogo = require('../assets/vinaigrette-logo-transparent.svg')

export default {
  name: 'VinaigretteLogo',

  props: {
    size: {
      type: Number,
      required: true
    },
    transparent: {
      type: Boolean,
      default: false,
      required: false
    },
    class: {
      default: ''
    }
  },

  beforeMount () {
    console.log('Attributes:', this.$attrs)
  },

  computed: {
    image () {
      return this.$props.transparent ? transparentLogo : logo
    },

    classes () {
      return this.$attrs.class
    }
  }
}
</script>
