<template>
  <v-form ref="imageForm" @submit.prevent="handleSubmission">
    <h1 class="mb-4">Submit a new image</h1>

    <v-file-input
      v-model="file"
      label="Image for your sauce"
      prepend-icon="fa-file-image"
      outlined
      @change="handleFileChange" />

    <div class="d-flex justify-center mb-5">
      <v-img
        :src="imagePreview"
        v-if="imagePreview"
        max-height="400"
        max-width="400"
        class="p0 m0" />
    </div>

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
      :disabled="!file || !answer"
      large>
      Submit this quote
    </v-btn>
  </v-form>
</template>

<script>
import { imageAPIUrl } from '@/config'

export default {
  name: 'NewImageSauceForm',

  data () {
    return {
      file: [],
      answer: '',
      imagePreview: ''
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

    /**
     * @param {Array<File>} files Files
     */
    handleFileChange (file) {
      if (!file) {
        return
      }

      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        this.imagePreview = e.target.result
      }
      fileReader.readAsDataURL(file)
    },

    async handleSubmission () {
      if (!this.file || !this.answer) {
        console.log('test')
        return
      }

      try {
        const formData = new FormData()
        formData.append('answer', this.answer)
        formData.append('image', this.file)

        await this.$http.post(imageAPIUrl, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        this.showSuccess('Image sauce submitted!')
        this.$refs.imageForm.reset()
        this.imagePreview = ''
      } catch (_) {
        this.showError('Something went wrong', 'Unable to add image sauce')
      }
    }
  }
}
</script>
