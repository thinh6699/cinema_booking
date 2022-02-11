import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Movie from './modules/Movie'
import Ticket from './modules/Ticket'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movie: Movie,
    ticket: Ticket
  },
  plugins: [
    createPersistedState({
      paths: ['movie', 'ticket']
    })
  ]
})

export default store
