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
        title: 'Want a new username?',
        input: 'text',
        inputPlaceholder: 'Enter your new username',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
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
