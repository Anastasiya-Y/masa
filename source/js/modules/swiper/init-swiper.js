const swiperContainerHero = document.querySelector('.hero__container');

const initSwiper = () => {
  const swiperHero = new Swiper(swiperContainerHero, {
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      bulletElement: 'button',
      bulletClass: 'hero__bullet',
      bulletActiveClass: 'hero__bullet--active',
      clickable: true,
    },
    uniqueNavElements: false,
    simulateTouch: false,
    centeredSlides: true,
    loop: true,
    speed: 300,
    /* autoplay: {
      delay: 3000,
    },*/
    cssMode: true,
  });
};

export {initSwiper};
