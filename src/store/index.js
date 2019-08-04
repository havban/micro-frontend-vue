import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    id: 'dodol@gmail.com',
    name: 'dodol'
  }
}

const mutations = {

}

const getters = {
  user (state) {
    return state.user
  }
}

const actions = {

}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

window.addStoreModule = function (module) {
  store.addModule(module)
}

export default store
