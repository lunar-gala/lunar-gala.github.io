var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "coverflow",
  mousewheelControl: true,
  direction: 'horizontal',
  mousewheel: {
    releaseOnEdges: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

