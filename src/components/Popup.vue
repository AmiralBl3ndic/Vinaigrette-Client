<template>
  <div>
  <button @click="showErrorAlert">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    async showErrorAlert (title, textContent) {
      const { value: pseudo } = await this.$swal({
        title: 'want a new pseudo?',
        input: 'text',
        inputPlaceholder: 'Enter your new pseudo',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        },
        showCloseButton: true
      })
      if (pseudo) {
        this.$socket.emit('set_username', { username: this.pseudo })
      }
    }
  }
}
</script>
