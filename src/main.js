import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import JsonExcel from "vue-json-excel"

import './assets/css/main.css'
import './assets/css/bootstrap-grid.min.css'

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.component("downloadExcel", JsonExcel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
