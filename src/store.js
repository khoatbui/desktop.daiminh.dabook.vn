import Vue from 'vue';
import Vuex from 'vuex';
import app from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: {
      isShow: false,
    },
    currentLang: 'EN',
    tour: {
      order: {},
      tourDetail: {},
    },
    hotel: {
      order: {
        guest: {
          guest: { qty: 1 },
          child04: { qty: 0 },
          child48: { qty: 0 },
        },
        checkInDate: '',
        checkOutDate: '',
        totalPrice: 0,
        hotel: {},
        roomType: {},
        package: {},
        optionService: {},
      },
    },
  },
  mutations: {
    showHideLoading(state, payload) {
      state.loading.isShow = payload;
    },
    updateTourOrder(state, payload) {
      state.tour.order = payload;
    },
    updateTourDetail(state, payload) {
      state.tour.tourDetail = payload;
    },
    updateHotelOrder(state, payload) {
      state.hotel.order = payload;
    },
    SET_LANG(state, payload) {
      app.$i18n.locale = payload;
    },
  },
  actions: {
    updateTourOrder({ commit }, order) {
      commit('updateTourOrder', order);
    },
    updateTourDetail({ commit }, tourDetail) {
      commit('updateTourDetail', tourDetail);
    },
    updateHotelOrder({ commit }, order) {
      commit('updateHotelOrder', order);
    },
    updateHotelPackageDetail({ commit }, order) {
      commit('updateHotelOrder', order);
    },
    setLang({ commit }, payload) {
      commit('SET_LANG', payload);
    },
  },
});
