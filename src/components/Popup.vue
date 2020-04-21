<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Login</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Login</v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {

}
</script>
