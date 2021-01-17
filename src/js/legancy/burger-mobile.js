(function () {
  const openMenuBtn = document.querySelector("#menu-btn-open");
  const closeMenuBtn = document.querySelector("#menu-btn-close");

  const menu = document.querySelector("#menu");

  function menuBtnToggleClickHandler(isClose = false) {
    const closeDuration = 300;

    if (isClose)
      setTimeout(() => menu.classList.remove("active"), closeDuration);
    else menu.classList.add("active");

    const animations = {
      open: [{ height: "0" }, { height: "100vh" }],
      close: [{ height: "100vh" }, { height: "0" }],
    };

    menu.animate(isClose ? animations.close : animations.open, {
      duration: closeDuration,
    });
  }

  openMenuBtn.addEventListener("click", () => menuBtnToggleClickHandler());
  closeMenuBtn.addEventListener("click", () => menuBtnToggleClickHandler(true));
})();
