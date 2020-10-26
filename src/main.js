import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import axios from 'axios'
import './quasar'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
