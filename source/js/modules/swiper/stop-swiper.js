import {swiperHero} from './init-swiper';

const controlSwiper = () => {
  if (document.body.classList.contains('scroll-lock')) {
    swiperHero.autoplay.stop();
  } else {
    swiperHero.autoplay.start();
  }
};

const stopSwiper = () => {
  document.body.addEventListener('click', controlSwiper);
  document.body.addEventListener('keydown', controlSwiper);
};

export {stopSwiper};
