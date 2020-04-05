export default {
  drawer({ commit }, payload) {
    commit("drawer", payload);
  },
  welcome_screen({ commit }, payload) {
    commit("welcome_screen", payload);
  },
  lang({ commit }, payload) {
    commit("lang", payload);
  },
  modal({ commit }, payload) {
    commit("modal", payload);
  },
};
