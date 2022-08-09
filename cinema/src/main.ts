import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/lang'
import '@/globalComponent'
import './assets/scss/index.scss'
import './validations/validation'
import moment from 'moment'
import VueLazyload from 'vue-lazyload'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper, { Autoplay, Pagination, Navigation } from 'swiper'
import { BootstrapVue } from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

Swiper.use([Autoplay, Pagination, Navigation])

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/not-found.gif'),
  loading: require('@/assets/images/loading.gif'),
  attempt: 1
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.prototype.moment = moment

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
