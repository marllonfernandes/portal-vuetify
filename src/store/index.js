import { createStore } from 'vuex'

export default createStore({
  state: {
    credential: {}
  },
  getters: {
    getCredential(state){
      return state.credential
    }
  },
  mutations: {
    setCredential(state, credential){
      state.credential = credential
    }
  },
  actions: {
  },
  modules: {
  }
})
