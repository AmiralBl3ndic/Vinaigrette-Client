<template>
  <v-container>
    <router-link to="/" class="d-flex align-center mt-5">
      <div>
        <v-icon large class="primary--text">fas fa-arrow-left</v-icon>
      </div>
      <div>
        <span class="display-1 ml-2 primary--text no-underline">Back</span>
      </div>
    </router-link>

    <v-row class="mt-5">
      <v-col cols="12">
        <NewQuoteSauceForm />
      </v-col>
    </v-row>

    <v-divider class="my-12" />

    <v-row>
      <v-col cols="12">
        <NewImageSauceForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewQuoteSauceForm from '@/components/NewQuoteSauceForm.vue'
import NewImageSauceForm from '@/components/NewImageSauceForm.vue'

export default {
  name: 'Contribute',

  components: {
    NewQuoteSauceForm,
    NewImageSauceForm
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
