<template>
  <div>
  <button @click="showUsernameDialog">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    async showUsernameDialog () {
      const { value: pseudo } = await this.$swal({
        title: 'what is your Username ?',
        input: 'text',
        inputPlaceholder: 'Enter your new username',
        inputValidator: (value) => {
          if (!value) {
            return 'You have to choose a username ! '
          }
        },
        showCloseButton: true
      })
      if (pseudo) {
        this.$socket.emit('set_username', { username: pseudo })
      }
    }
  }
}
</script>
