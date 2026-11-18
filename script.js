const swiper = new Swiper('.luoghi-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  a11y: {
    enabled: true,
  },
});
