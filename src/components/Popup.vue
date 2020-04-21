<template>
  <div>
  <button @click="showErrorAlert" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert () {
      this.$swal('Hello Vue world!!!')
    },

    showErrorAlert (title, textContent) {
      this.$swal({
        title: 'want a new pseudo?',
        input: 'text',
        inputPlaceholder: 'Enter your new pseudo',
        showCloseButton: true
      })
    }
  }
}
</script>
