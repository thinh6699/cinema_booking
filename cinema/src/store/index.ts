import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Todo from './modules/Todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todo: Todo
  },
  plugins: [
    createPersistedState({
      paths: ['todo']
    })
  ]
})

export default store
