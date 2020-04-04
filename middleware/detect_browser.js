export default () => {
  var browser = (function() {
    var test = function(regexp) {
      return regexp.test(window.navigator.userAgent);
    };
    switch (true) {
      case test(/edg/i):
        return "edge";
      case test(/opr/i) && (!!window.opr || !!window.opera):
        return "opera";
      case test(/chrome/i) && !!window.chrome:
        return "chrome";
      case test(/trident/i):
        return "ie";
      case test(/firefox/i):
        return "firefox";
      case test(/safari/i):
        return "safari";
      default:
        return "other";
    }
  })();
  return browser;
};
