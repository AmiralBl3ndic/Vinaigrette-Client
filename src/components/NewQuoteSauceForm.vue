<template>
  <v-form ref="quoteForm" @submit.prevent="handleSubmission">
    <h1 class="mb-4">Submit a new quote</h1>

    <v-text-field
      v-model="quote"
      placeholder="Quote"
      label="Quote"
      hint="Private jokes are not a good idea: only a few people get them"
      prepend-icon="fa-quote-right"
      outlined />

      <v-text-field
        v-model="answer"
        placeholder="Answer"
        label="Answer"
        hint="No, 42 isn't the answer"
        prepend-icon="fa-hotdog"
        outlined />

      <v-btn
        type="submit"
        color="accent"
        class="ml-8"
        large>
        Submit this quote
      </v-btn>
  </v-form>
</template>

<script>
import { quoteAPIUrl } from '@/config'

export default {
  name: 'NewQuoteSauceForm',

  data () {
    return {
      quote: '',
      answer: ''
    }
  },

  methods: {
    showError (title, content) {
      this.$swal({
        icon: 'error',
        titleText: title,
        text: content,
        customClass: {
          container: 'primary'
        },
        confirmButtonColor: this.$vuetify.theme.themes.light.secondary
      })
    },

    showSuccess (text) {
      this.$swal({
        icon: 'success',
        titleText: text,
        customClass: {
          container: 'primary'
        },
        confirmButtonColor: this.$vuetify.theme.themes.light.success
      })
    },

    async handleSubmission () {
      try {
        await this.$http.post(quoteAPIUrl, { quote: this.quote, answer: this.answer })
        this.showSuccess('Quote submitted!')
        this.$refs.quoteForm.reset()
      } catch (_) {
        this.showError('An error occurred', 'Unable to submit form')
      }
    }
  }
}
</script>
