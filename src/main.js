import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'

import './icons'
import SvgIcon from '@/components/SvgIcon'
Vue.component('SvgIcon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
