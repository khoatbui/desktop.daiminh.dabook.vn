import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: {
      isShow: false,
    },
  },
  mutations: {
    showHideLoading(state, payload) {
      state.loading.isShow = payload;
    },
  },
  actions: {

  },
});
