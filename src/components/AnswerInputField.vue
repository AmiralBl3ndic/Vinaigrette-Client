<template>
  <v-container>
    <v-form ref="answerInputForm" @submit.prevent="tryAnswer">
      <v-text-field
        v-model="answer"
        autofocus
        filled />
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'AnswerInputField',

  data () {
    return {
      answer: ''
    }
  },

  methods: {
    tryAnswer () {
      this.$socket.emit('sauce_answer', this.answer)
      this.$refs.answerInputForm.reset()
    }
  }
}
</script>
