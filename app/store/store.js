import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex, axios, VueAxios);

const url = 'https://fe-task.getsandbox.com/performance';

export default new Vuex.Store({
  state: {
    performance: [],
  },
  mutations: {
    setPerformance(state, payload) {
      state.performance = payload;
    },
  },
  actions: {
    fetchPerformance(state) {
      axios.get(url)
        .then((res) => {
          state.commit('setPerformance', res.data);
        });
    },
  },
  modules: {},
  getters: {
    getPerformance: state => {
      return state.performance;
    },

  },
});
