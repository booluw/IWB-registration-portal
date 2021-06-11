import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'

import './assets/css/main.css'
import './assets/css/bootstrap-grid.min.css'

Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
