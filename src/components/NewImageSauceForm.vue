<template>
  <v-form ref="imageForm" @submit.prevent="handleSubmission">
    <h1 class="mb-4 light--text">Submit a new image</h1>

    <v-file-input
      v-model="file"
      label="Image for your sauce"
      prepend-icon="fa-file-image"
      filled
      color="light"
      background-color="light"
      class="light--text"
      @change="handleFileChange" />

    <div class="d-flex justify-center mb-5 border">
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
      hint="No, 42 isn't the answer"
      prepend-icon="fa-hotdog"
      class="light--text"
      color="light"
      background-color="light"
      filled />

    <v-btn
      type="submit"
      color="accent"
      class="ml-8"
      :disabled="!file || !answer || submitted"
      large>
      <span v-if="!submitted">Submit this image</span>
      <span v-if="submitted">
        <v-progress-circular indeterminate />
      </span>
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
      imagePreview: '',
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

    /**
     * @param {Array<File>} files Files
     */
    handleFileChange (file) {
      if (!file) {
        this.imagePreview = ''
        return
      }

      const fileReader = new FileReader()
      fileReader.onload = (e) => {
        this.imagePreview = e.target.result
      }
      fileReader.readAsDataURL(file)
    },

    async handleSubmission () {
      if (!this.file || !this.answer || this.submitted) {
        return
      }

      this.submitted = true

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
      } finally {
        this.submitted = false
      }
    }
  }
}
</script>
