import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Movie from './modules/Movie'
import Ticket from './modules/Ticket'
import Language from './modules/Language'
import Auth from './modules/Auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movie: Movie,
    ticket: Ticket,
    language: Language,
    auth: Auth
  },
  plugins: [
    createPersistedState({
      paths: ['movie', 'ticket', 'language', 'auth']
    })
  ]
})

export default store
