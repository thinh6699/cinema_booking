import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Movie from './modules/Movie'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movie: Movie
  },
  plugins: [
    createPersistedState({
      paths: ['movie']
    })
  ]
})

export default store
