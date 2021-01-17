(function () {
  window.addEventListener("DOMContentLoaded", () => {
    loadPreviewSlickSlider();
    loadContentNewsSlickSlider();
  });
})();

function loadContentNewsSlickSlider() {
  
}

function loadPreviewSlickSlider() {
  const btnComponent = (txt, pos) =>
    `<button class='slick-prev preview__arrow preview__arrow-${pos}'>${txt}</button>`;

  const slickSliderConfig = {
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,

    arrows: true,
    prevArrow: btnComponent("Предыдущий", "left"),
    nextArrow: btnComponent("Следущая", "right"),
  };

  $("#preview-slider").slick(slickSliderConfig);
}
