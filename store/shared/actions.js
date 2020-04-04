export default {
  drawer({ commit }, payload) {
    commit("drawer", payload);
  },
  welcome_screen({ commit }, payload) {
    commit("welcome_screen", payload);
  },
  cursor_option({ commit }, payload) {
    commit("cursor_option", payload);
  }
};
