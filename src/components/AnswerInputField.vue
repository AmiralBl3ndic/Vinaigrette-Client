<template>
  <v-container v-if="$store.state.canAnswer">
    <v-form ref="answerInputForm" @submit.prevent="tryAnswer" autocomplete="off">
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
      if (!this.answer) return
      this.$socket.emit('sauce_answer', this.answer)
      this.$refs.answerInputForm.reset()
    }
  }
}
</script>
