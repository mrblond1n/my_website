export default {
  drawer(state, payload) {
    state.drawer = payload;
  },
  welcome_screen(state, payload) {
    state.welcome_screen = payload;
  },
  lang(state, payload) {
    if (payload === "ru") {
      state.lang = payload;
    } else {
      state.lang = "en";
    }
  }
};
