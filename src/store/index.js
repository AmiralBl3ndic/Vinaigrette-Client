import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: ''
  },
  mutations: {
    SET_ROOMS_LIST (state, payload) {
      state.rooms = payload
    },

    SET_CURRENT_ROOM (state, payload) {
      state.currentRoom = payload
    }
  },
  actions: {
    /// Handles operations and mutations to perform when receiving the "rooms_list_update" socket event
    SOCKET_rooms_list_update ({ commit }, payload) {
      commit('SET_ROOMS_LIST', payload.roomNames)
    },

    /// Handles operations and mutations to perform when receiving the "join_room_success" socket event
    SOCKET_join_room_success ({ commit }, { roomName }) {
      commit('SET_CURRENT_ROOM', roomName)
      router.push('/play')
    },

    /// Handles operations and mutations to perform when receiving the "create_room_success" socket event
    SOCKET_create_room_success ({ commit }, { roomName }) {
      commit('SET_CURRENT_ROOM', roomName)
      router.push('/play')
    }
  },
  modules: {
  }
})
