<template>
  <v-container>
    <h3 class="headline light--text text-center">What's the sauce for this quote?</h3>

    <blockquote class="display-2 light--text mt-10 text-center">
      “{{ quote }}”
    </blockquote>
  </v-container>
</template>

<script>
export default {
  name: 'QuoteSauce',

  computed: {
    quote () {
      return this.$store.state.currentSauce.quote
    }
  }
}
</script>
