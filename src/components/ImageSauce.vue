<template>
  <div id="image-sauce">
    <div>
      <h3 v-if="!rightAnswer" class="headline light--text text-center">What's the sauce for this image?</h3>
      <h3 v-if="rightAnswer" class="headline light--text text-center">
        The correct answer was: “{{ rightAnswer }}”
      </h3>
    </div>

    <v-img
      :src="sauceSrc"
      max-height="350"
      class="justify-center image-sauce my-5 px-3"
      contain />
  </div>
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

<style scoped>
#image-sauce {
  width: 100%; max-width: 100%;

  display: grid;

  grid-template-rows: 20% 80%;
}
</style>
