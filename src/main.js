import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
axios.defaults.withCredentials = true // this line here !
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
