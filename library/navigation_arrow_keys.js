export default (list, router) => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      list.filter((nav, i) => {
        if (nav.path === window.location.pathname) {
          if (list[i + 1] === undefined) {
            router.push(list[0].path);
            return;
          }
          router.push(list[i + 1].path);
        }
      });
    } else if (e.key === "ArrowLeft") {
      list.filter((nav, i) => {
        if (nav.path === window.location.pathname) {
          if (list[i - 1] === undefined) {
            router.push(list[list.length - 1].path);
            return;
          }
          router.push(list[i - 1].path);
        }
      });
    }
  });
};
