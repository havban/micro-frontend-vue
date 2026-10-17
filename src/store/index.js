import { createStore } from 'vuex'

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

const store = createStore({
  state,
  mutations,
  getters,
  actions
})

// Lets micro-frontends register their own Vuex module on the shared store.
window.addStoreModule = function (name, module) {
  store.registerModule(name, module)
}

export default store
