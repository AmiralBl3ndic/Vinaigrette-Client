<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" justify="center">
        <v-row align="center">
          <VinaigretteLogo :size="200" />
        </v-row>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 accent--text">
          Welcome to Vinaigrette
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VinaigretteLogo from '@/components/VinaigretteLogo.vue'

export default {
  name: 'HelloWorld',

  components: {
    VinaigretteLogo
  }
}
</script>
