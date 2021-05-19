import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedApp: {}
  },
  mutations: {
    SET_SYSTEM_MICRO: (state, micro) => {
      if (micro && Object.keys(micro).length === 0) {
        state.loadedApp = micro
      } else {
        state.loadedApp = Object.assign(state.loadedApp, micro)
      }
    }
  },
  actions: {
    setSystemMicro({ commit }, micro) {
      console.log('改变已加载应用--', micro)
      commit('SET_SYSTEM_MICRO', micro)
    }
  },
  modules: {},
  getters: {
    loadedApp: state => state.loadedApp
  }
});
