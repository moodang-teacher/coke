var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
