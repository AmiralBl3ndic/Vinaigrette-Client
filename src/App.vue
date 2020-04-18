<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      elevation="1"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vinaigrette Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/vinaigrette-logo-transparent.svg')"
          transition="scale-transition"
          height="40"
          width="40"
        />

        <h1>Vinaigrette</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="secondary">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
