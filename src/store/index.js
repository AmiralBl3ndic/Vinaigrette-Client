import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: '',
    scoreboard: [],
    gameStarted: false
  },
  mutations: {
    SET_ROOMS_LIST (state, payload) {
      state.rooms = payload
    },

    SET_CURRENT_ROOM (state, payload) {
      state.currentRoom = payload
    },

    SET_SCOREBOARD (state, payload) {
      state.scoreboard = payload.sort((a, b) => a.score - b.score)
    },

    SET_GAME_STARTED (state, payload) {
      state.gameStarted = payload
    }
  },
  actions: {
    /// Handles operations and mutations to perform when receiving the "rooms_list_update" socket event
    SOCKET_rooms_list_update ({ commit }, payload) {
      commit('SET_ROOMS_LIST', payload.roomNames)
    },

    /// Handles operations and mutations to perform when receiving the "join_room_success" socket event
    SOCKET_join_room_success ({ commit }, { roomName, started }) {
      commit('SET_CURRENT_ROOM', roomName)
      commit('SET_GAME_STARTED', started)
      router.push('/play') // Redirect player to view where he can play
    },

    /// Handles operations and mutations to perform when receiving the "create_room_success" socket event
    SOCKET_create_room_success ({ commit }, { roomName, started }) {
      commit('SET_CURRENT_ROOM', roomName)
      commit('SET_GAME_STARTED', started)
      router.push('/play') // Redirect player to view where he can play
    },

    /// Handles operations and mutations to perform when receiving the "leave_room_success" socket event
    SOCKET_leave_room_success ({ commit }) {
      commit('SET_CURRENT_ROOM', '') // Remove current room
    },

    /// Handles operations and mutations to perform when receiving the "scoreboard_update" socket
    SOCKET_scoreboard_update ({ commit }, { scoreboard }) {
      commit('SET_SCOREBOARD', scoreboard)
    }
  },
  modules: {
  }
})
