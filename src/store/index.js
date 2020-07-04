import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    language: 'zh'
  },

  /// store.commit('changeToEn')
  mutations: {
    changeToEn(state) {
      state.language = 'en'
    },
    changeToZh(state) {
      state.language = 'zh'
    }
  },
  actions: {
  },
  modules: {
  }
})
