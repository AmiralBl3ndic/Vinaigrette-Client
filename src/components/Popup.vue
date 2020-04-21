// example-vue-component.vue
<template>
  <button @click="showAlert">Login</button>
</template>

<script>
export default {
  methods: {
    showAlert () {
      this.$swal('Hello Vue world!!!')
    }
  }
}
</script>
