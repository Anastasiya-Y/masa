import {swiperHero} from './init-swiper';

const controlSwiper = (evt) => {
  if (document.body.classList.contains('scroll-lock')) {
    swiperHero.autoplay.stop();
  } else {
    swiperHero.autoplay.start();
  }
};

const stopSwiper = () => {
  document.addEventListener('click', controlSwiper);
  document.addEventListener('keyup', controlSwiper);
};

export {stopSwiper};
