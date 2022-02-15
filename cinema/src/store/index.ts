import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Movie from './modules/Movie'
import Ticket from './modules/Ticket'
import Language from './modules/Language'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movie: Movie,
    ticket: Ticket,
    language: Language
  },
  plugins: [
    createPersistedState({
      paths: ['movie', 'ticket', 'language']
    })
  ]
})

export default store
