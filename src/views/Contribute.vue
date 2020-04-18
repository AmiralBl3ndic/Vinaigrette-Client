<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <NewQuoteSauceForm />
      </v-col>
    </v-row>

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
