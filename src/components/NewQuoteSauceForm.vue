<template>
  <v-form ref="quoteForm" @submit.prevent="handleSubmission" class="light--text">
    <h1 class="mb-4">Submit a new quote</h1>

    <v-text-field
      v-model="quote"
      placeholder="Quote"
      hint="Private jokes are not a good idea: only a few people get them"
      prepend-icon="fa-quote-right"
      class="light--text my-2"
      color="light"
      background-color="light"
      filled />

    <v-text-field
      v-model="answer"
      placeholder="Answer"
      hint="No, 42 isn't the answer"
      prepend-icon="fa-hotdog"
      class="light--text my-2"
      color="light"
      background-color="light"
      filled />

    <v-btn
      type="submit"
      color="accent"
      class="ml-8"
      :disabled="!quote || !answer || submitted"
      large>
      <span v-if="!submitted">Submit this quote</span>
      <span v-if="submitted">
        <v-progress-circular indeterminate />
      </span>
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
      answer: '',
      submitted: false
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
      if (!this.quote || !this.answer || this.submitted) {
        return
      }

      this.submitted = true

      try {
        await this.$http.post(quoteAPIUrl, { quote: this.quote, answer: this.answer })
        this.showSuccess('Quote submitted!')
        this.$refs.quoteForm.reset()
      } catch (_) {
        this.showError('An error occurred', 'Unable to submit form')
      } finally {
        this.submitted = false
      }
    }
  }
}
</script>
