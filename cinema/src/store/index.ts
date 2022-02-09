import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Movie from './modules/Movie'
import TicketTime from './modules/TicketTime'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movie: Movie,
    ticketTime: TicketTime
  },
  plugins: [
    createPersistedState({
      paths: ['movie', 'ticketTime']
    })
  ]
})

export default store
