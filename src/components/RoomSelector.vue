<template>
  <div>
    <v-row justify="center">
      <h2 class="display-2">Available Rooms</h2>
    </v-row>

    <v-container class="mx-12">
      <v-divider class="my-5" />
      <div v-for="(room, id) of rooms" :key="id" class="px-15" @click.stop="handleJoinRoom(room)">
        <span class="headline">{{ room }}</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'RoomSelector',

  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },

  methods: {
    handleJoinRoom (roomName) {
      this.$socket.emit('join_room', { roomName })
    }
  },

  sockets: {
    join_room_error (data) {
      this.$swal({
        icon: 'error',
        titleText: 'Could not join room',
        text: data.error,
        customClass: {
          container: 'primary'
        },
        confirmButtonColor: this.$vuetify.theme.themes.light.secondary
      })
    },

    join_room_success (data) {
      console.log('Room joining success!', data)
      this.$router.push('/play')
    }
  }
}
</script>

<style>
</style>
