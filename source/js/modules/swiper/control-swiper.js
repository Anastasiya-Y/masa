import {swiperHero} from './init-swiper';
import {isEscapeKey} from '../../utils/util.js';

const openHeaderbutton = document.querySelector('[data-burger]');
const openModalButton = document.querySelector('[data-open-modal="about"]');
const closeModalElements = document.querySelectorAll('[data-close-modal]');
const closeMenuElements = document.querySelectorAll('[data-close-menu]');
const header = document.querySelector('.main-header');

const onOpenElementClick = () => {
  swiperHero.autoplay.stop();
};

const onBurgerCloseClick = () => {
  if (!document.body.classList.contains('scroll-lock')) {
    swiperHero.autoplay.start();
  }
};

const onCloseElementClick = (evt) => {
  if (evt.target.closest('[data-close-modal]')) {
    swiperHero.autoplay.start();
    return;
  }

  if (header.classList.contains('is-open')) {
    if (evt.target.hasAttribute('data-close-menu')) {
      swiperHero.autoplay.start();
    }
  }
};
const onEscClick = (evt) => {
  if (document.body.classList.contains('scroll-lock') && isEscapeKey(evt)) {
    swiperHero.autoplay.start();
  }
};

const controlSwiper = () => {
  if (openHeaderbutton) {
    openHeaderbutton.addEventListener('click', onOpenElementClick);
    openHeaderbutton.addEventListener('click', onBurgerCloseClick);
  }

  if (openModalButton) {
    openModalButton.addEventListener('click', onOpenElementClick);
  }

  if (closeModalElements) {
    closeModalElements.forEach((element) => {
      element.addEventListener('click', onCloseElementClick);
    });
  }

  if (closeMenuElements) {
    closeMenuElements.forEach((element) => {
      element.addEventListener('click', onCloseElementClick);
    });
  }

  document.addEventListener('keydown', onEscClick);
};

export {controlSwiper};
