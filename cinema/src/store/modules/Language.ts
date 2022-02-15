import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
import { ILanguage } from '@/models/index'

@Module({ name: 'language', namespaced: true })
class Language extends VuexModule implements ILanguage {
  public code = 'en'
  public text = 'ENG'

  @Mutation
  setLanguage(language: ILanguage): void {
    this.code = language.code
    this.text = language.text
  }

  @Action({ rawError: true })
  SET_LANGUAGE(language: ILanguage): void {
    this.context.commit('setLanguage', language)
  }
}

export default Language
