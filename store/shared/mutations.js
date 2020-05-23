export default {
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
