import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

interface TodoItem {
  name: string
  completed: boolean
}

@Module({ namespaced: true, name: 'todo' })
class Todo extends VuexModule {
  count: number = 0
  todos: TodoItem[] = []

  @Mutation
  inc() {
    this.count++
  }

  @Action
  INC() {
    this.context.commit('inc')
  }

  get getDoubleCount() {
    return this.count * 2
  }
}

export default Todo
