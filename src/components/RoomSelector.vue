<template>
  <div>
    <v-row justify="center">
      <h2 class="display-2">Available Rooms</h2>
    </v-row>

    <v-container class="mx-12">
      <v-divider class="my-5" />
      <div v-for="(room, id) of rooms" :key="id" class="px-15 room-link" @click.stop="handleJoinRoom(room)">
        <span class="headline">{{ room }}</span>
      </div>

      <v-form ref="createRoomForm" @submit.prevent="handleCreateRoom" class="mt-5">
        <v-row>
          <v-col md="8" offset-md="2" class="d-flex flex-column align-center">
            <h2 class="display-1 my-4">Create a new room</h2>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="7" offset="1">
            <v-text-field v-model="newRoomName" placeholder="Room name" outlined hide-details />
          </v-col>

          <v-col cols="3" offset="0">
            <v-btn block type="submit" color="accent" class="py-7">
              Create
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'RoomSelector',

  data () {
    return {
      newRoomName: ''
    }
  },

  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },

  methods: {
    handleJoinRoom (roomName) {
      this.$socket.emit('join_room', { roomName })
    },

    handleCreateRoom () {
      if (this.newRoomName) {
        this.$socket.emit('create_room', { roomName: this.newRoomName })
        this.$refs.createRoomForm.reset()
      }
    },

    showErrorAlert (title, textContent) {
      this.$swal({
        icon: 'error',
        titleText: title,
        text: textContent,
        customClass: {
          container: 'primary'
        },
        confirmButtonColor: this.$vuetify.theme.themes.light.secondary
      })
    }
  },

  sockets: {
    join_room_error (data) {
      this.showErrorAlert('Could not join room', data.error)
    },

    create_room_error (data) {
      this.showErrorAlert('Could not create room', data.error)
    }
  }
}
</script>

<style scoped>
.room-link:hover {
  cursor: pointer;
}
</style>
