const swiperContainerHero = document.querySelector('.hero__container');
const swiperContainerPrograms = document.querySelector('.programs__container');

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

  const swiperPrograms = new Swiper(swiperContainerPrograms, {
    /* pagination: {
      el: '.programs__pagination',
      type: 'bullets',
      bulletElement: 'button',
      bulletClass: 'programs__bullet',
      bulletActiveClass: 'hero__bullet--active',
      clickable: true,
    }, */
    navigation: {
      nextEl: '.programs__button--next',
      prevEl: '.programs__button--prev',
    },
    simulateTouch: false,
    scrollbar: {
      el: '.programs__scrollbar',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
};

export {initSwiper};
