var swiper = new Swiper('.screenshot .swiper-container', {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
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