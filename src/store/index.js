import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    SET_ROOMS_LIST (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    SOCKET_rooms_list_update ({ commit }, payload) {
      commit('SET_ROOMS_LIST', payload.roomNames)
    }
  },
  modules: {
  }
})
