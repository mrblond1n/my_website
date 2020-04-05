export default {
  drawer(state, payload) {
    state.drawer = payload;
  },
  welcome_screen(state, payload) {
    state.welcome_screen = payload;
  },
  modal(state, payload) {
    state.modal = payload;
  },
  lang(state, payload) {
    if (payload === "ru") {
      state.lang = payload;
    } else {
      state.lang = "en";
    }
  },
};
