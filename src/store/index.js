import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    currentRoom: '',
    scoreboard: [],
    gameStarted: false,
    currentSauce: null,
    canAnswer: false,
    rightAnswer: ''
  },
  getters: {
    currentSauceType (state) {
      return state.currentSauce ? state.currentSauce.type : null
    },

    quoteSauce (state) {
      if (state.currentSauce && state.currentSauce.type === 'quote') {
        return state.currentSauce.quote
      }
      return null
    },

    imageSauce (state) {
      if (state.currentSauce && state.currentSauce.type === 'image') {
        return state.currentSauce.imageUrl
      }
      return ''
    }
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
    },

    SET_SAUCE (state, payload) {
      state.currentSauce = payload
    },

    SET_CAN_ANSWER (state, payload) {
      state.canAnswer = payload
    },

    SET_RIGHT_ANSWER (state, payload) {
      state.rightAnswer = payload
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
      commit('SET_GAME_STARTED', false)
      commit('SET_SAUCE', null)
    },

    /// Handles operations and mutations to perform when receiving the "scoreboard_update" socket event
    SOCKET_scoreboard_update ({ commit }, { scoreboard }) {
      commit('SET_SCOREBOARD', scoreboard)
    },

    /// Handles operations and mutations to perform when receiving the "game_start" socket event
    SOCKET_game_start ({ commit }) {
      commit('SET_GAME_STARTED', true)
    },

    /// Handles operations and mutations to perform when receiving the "game_end" socket event
    SOCKET_game_end ({ commit }) {
      commit('SET_GAME_STARTED', false)
    },

    /// Handles operations and mutations to perform when receiving the "new_round_sauce" socket event
    SOCKET_new_round_sauce ({ commit }, payload) {
      commit('SET_SAUCE', payload)
      commit('SET_CAN_ANSWER', true)
      commit('SET_RIGHT_ANSWER', '')
    },

    /// Handles operations and mutations to perform when receiving the "round_end" socket event
    SOCKET_round_end ({ commit }) {
      commit('SET_CAN_ANSWER', false)
    },

    /// Handles operations and mutations to perform when receiving the "right_answer" socket event
    SOCKET_right_answer ({ commit }, { answer }) {
      commit('SET_RIGHT_ANSWER', answer)
    }
  },
  modules: {
  }
})
