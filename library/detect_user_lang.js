export default () => {
  var language = window.navigator
    ? window.navigator.language ||
      window.navigator.systemLanguage ||
      window.navigator.userLanguage
    : "ru";
  return language.substr(0, 2).toLowerCase();
};
