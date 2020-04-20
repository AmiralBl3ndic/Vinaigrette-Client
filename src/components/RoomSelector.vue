<template>
  <div>
    <v-row justify="center">
      <h2 class="display-2 light--text">Available Rooms</h2>
    </v-row>

    <v-container fluid class="">
      <v-container>
        <v-divider class="my-5" />
        <div v-for="(room, id) of rooms" :key="id" class="my-2 room-link" @click.stop="handleJoinRoom(room)">
          <span class="headline light--text">{{ room }}</span>
        </div>
      </v-container>

      <v-form ref="createRoomForm" @submit.prevent="handleCreateRoom" class="mt-5">
        <v-row>
          <v-col md="8" offset-md="2" class="d-flex flex-column align-center">
            <h2 class="display-1 my-4 light--text">Create a new room</h2>
          </v-col>
        </v-row>

        <v-row align="center form-field-wrapper px-12">
          <v-text-field v-model="newRoomName" placeholder="Room name" outlined hide-details class="input" />

          <v-btn block type="submit" color="warning" class="d-flex align-center submit">
            Create
          </v-btn>
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

.form-field-wrapper {
  display: grid;
  grid-template-areas: "input submit";
}

.input {
  grid-area: input;
}

.submit {
  grid-area: submit;
  height: 100% !important;
  min-height: 3rem;
}

@media screen and (max-width: 500px) {
  .form-field-wrapper {
    grid-template-areas:
      "input"
      "submit";
    grid-template-rows: auto auto;
  }

  .input {
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 501px) {
  .form-field-wrapper {
    grid-template-columns: 4fr 1fr;
  }

  .input {
    margin-right: 1rem;
  }
}
</style>
