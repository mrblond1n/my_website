export default {
  drawer(state, payload) {
    state.drawer = payload;
  },
  welcome_screen(state, payload) {
    state.welcome_screen = payload;
  },
  cursor_option(state, payload) {
    Object.entries(payload).forEach(([key, value]) => {
      state.cursor_option[key] = value;
    });
  },
  browser(state, payload) {
    console.log(payload);

    state.browser = payload;
  }
};
