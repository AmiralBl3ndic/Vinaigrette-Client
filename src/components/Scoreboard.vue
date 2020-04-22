<template>
  <v-card elevation="10" class="accent fill-height px-12 pt-6 white--text">
    <h3 class="headline mb-5 text-underline">Scoreboard</h3>
    <div v-for="(item, idx) of scoreboard" :key="idx" class="d-flex flex-row justify-space-between primary--text">
      <span class="body-1 font-weight-medium"
            :class="{'font-italic': item.found, 'white--text': item.found}">
            {{ item.player }}
      </span>
      <span class="body-1 font-weight-black"
            :class="{'white--text': item.found}">
      {{ item.score }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Scoreboard',

  computed: {
    scoreboard () {
      return this.$store.state.scoreboard
    }
  }
}
</script>

<style scoped>
.text-underline {
  text-decoration: underline;
}
</style>
