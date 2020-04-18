<template>
  <div>
    <h1 class="display-4">Play view</h1>

    <v-btn to="/" color="accent">
      Go back to home
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Play',

  beforeDestroy () {
    this.$socket.emit('leave_room', { roomName: this.$store.state.currentRoom })
  }
}
</script>

<style>

</style>
