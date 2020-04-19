<template>
  <v-container class="d-flex flex-column justify-center">
    <h3 v-if="!rightAnswer" class="headline light--text text-center">What's the sauce for this image?</h3>
    <h3 v-if="rightAnswer" class="headline light--text text-center">
      The correct answer was: “{{ rightAnswer }}”
    </h3>

    <v-img
      :src="sauceSrc"
      max-height="350"
      class="justify-center full-width"
      contain />
  </v-container>
</template>

<script>
export default {
  name: 'ImageSauce',

  computed: {
    sauceSrc () {
      return this.$store.getters.imageSauce
    },

    rightAnswer () {
      return this.$store.state.rightAnswer
    }
  }
}
</script>
