// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 5,
//     spaceBetween: 50,
//     loop: true,
//     // init: false,
//     autoplay: {
//       delay: 4500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints: {
//       1024: {
//         slidesPerView: 4,
//         spaceBetween: 40,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       }
//     }
//   });


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