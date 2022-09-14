import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'

@Module({ name: 'auth', namespaced: true })
class Auth extends VuexModule {
  token: string = ''

  @Mutation
  handleToken(token: any): void {
    this.token = token
  }

  @Mutation
  setTokenNull(): void {
    this.token = ''
  }

  @Action({ rawError: true })
  HANDLE_TOKEN(token: any): void {
    this.context.commit('handleToken', token)
  }

  @Action({ rawError: true })
  SET_TOKEN_NULL(): void {
    this.context.commit('setTokenNull')
  }
}

export default Auth
