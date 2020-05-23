export default {
  lang(state, payload) {
    if (payload === "ru") {
      state.lang = payload;
    } else {
      state.lang = "en";
    }
  },
};
