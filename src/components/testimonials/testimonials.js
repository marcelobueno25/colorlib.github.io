var swiper = new Swiper('.testimonials .swiper-container', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});