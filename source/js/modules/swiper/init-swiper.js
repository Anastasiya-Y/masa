const swiperContainerHero = document.querySelector('.hero__container');
const swiperContainerPrograms = document.querySelector('.programs__container');
const swiperContainerFeedback = document.querySelector('.feedback__container');

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
    navigation: {
      nextEl: '.programs__nav-button--next',
      prevEl: '.programs__nav-button--prev',
    },
    simulateTouch: false,
    scrollbar: {
      el: '.programs__scrollbar',
      dragSize: '392px',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        scrollbar: {
          hide: true,
          enabled: false,
        },
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: '324px',
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1240: {
        spaceBetween: 32,
      },
    },
  });

  const swipeFeedback = new Swiper(swiperContainerFeedback, {
    navigation: {
      nextEl: '.feedback__nav-button--next',
      prevEl: '.feedback__nav-button--prev',
    },
    simulateTouch: false,
    scrollbar: {
      el: '.feedback__scrollbar',
      dragSize: '392px',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        scrollbar: {
          hide: true,
          enabled: false,
        },
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: '324px',
        },
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
        dragSize: '392px',
      },
    },
  });
};

export {initSwiper};
