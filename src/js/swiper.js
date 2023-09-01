import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';
import '../../node_modules/swiper/swiper-bundle.min.css';

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
});
