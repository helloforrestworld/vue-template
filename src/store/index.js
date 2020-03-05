import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import permission from './permission'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    permission,
    user
  },
  getters: {
    roles: state => state.user.roles,
    token: state => state.user.token
  }
})
