import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const carousel = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
}

export default carousel;