<template>
  <div>Scoreboard Component</div>
</template>

<script>
export default {
  name: 'Scoreboard',

  computed: {
    scoreboard () {
      return this.$store.state.scorebord
    }
  }
}
</script>
