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
