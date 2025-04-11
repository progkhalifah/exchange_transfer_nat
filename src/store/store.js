import { createStore } from 'vuex';
import router from "@/router/router";

export default createStore({
  state: {
    currentLanguage: localStorage.getItem('language') || 'ar', // Default to 'ar'
  },
  getters: {
    currentLanguage: (state) => state.currentLanguage, // Return current language from state
  },
  mutations: {
    toggleLanguage(state) {
      state.currentLanguage = state.currentLanguage === 'ar' ? 'en' : 'ar'; // Toggle language
      localStorage.setItem('language', state.currentLanguage); // Persist language change
    },
    redirectTo(state, payload) {
      router.push({ name: payload });
    },
  },
  actions: {
    changeLanguage({ commit }) {
      commit('toggleLanguage');
    },
    redirectTo({ commit }, payload) {
      commit("redirectTo", payload.val);
    },
  },
  modules: {}
});
