import Vue from 'vue'
import VueI18n from 'vue-i18n'


// User defined lang
import enLocale from './en'
import vnLocale from './vn'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
  },
  vn: {
    ...vnLocale,
  }
}

export const getLocale = () => {
  const language = JSON.parse(String(localStorage.getItem('vuex')))?.language?.code
  return language ? language : 'en'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

export default i18n
