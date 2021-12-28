import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/globalComponent'
import './assets/scss/index.scss'
import './validations/validation'
import moment from 'moment'

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

Vue.use(BootstrapVue)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

Vue.prototype.moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
