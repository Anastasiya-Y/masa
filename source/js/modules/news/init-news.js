const items = document.querySelectorAll('.news__slide');
const newsControlsContainer = document.querySelector('.news__controls');
const newsControls = document.querySelectorAll('.news__control');
const swiperContainerNews = document.querySelector('.news__container');

let swiperNews;

const initSwiperNews = () => {
  swiperNews = new Swiper(swiperContainerNews, {
    pagination: {
      el: '.news__pagination',
      type: 'bullets',
      bulletClass: 'news__bullet',
      bulletActiveClass: 'news__bullet--active',
      clickable: true,
      renderBullet: (index, className) => {
        return '<button class="' + className + '">' + (index + 1) + '</button>';
      },
    },
    navigation: {
      nextEl: '.news__nav-button--next',
      prevEl: '.news__nav-button--prev',
    },
    simulateTouch: false,
    breakpoints: {
      320: {
        // slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        // slidesPerView: 'auto',
        spaceBetween: 30,

      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1240: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
  });
};
const onNewsButtonClick = (evt) => {
  if (evt.target.closest('.news__control')) {
    let activeButton = evt.target.closest('.news__control');

    if (activeButton.classList.contains('news__control--active')) {
      return;
    } else {
      newsControls.forEach((newsControl) => newsControl.classList.remove('news__control--active'));
      activeButton.classList.add('news__control--active');
    }

    let filterClass = activeButton.dataset['filter'];

    if (filterClass === 'all') {
      items.forEach((item) => {
        item.style.opacity = '0';
        item.style.display = 'flex';

        setTimeout(() => {
          item.style.opacity = '1';
        }, 300);
      });
    } else {
      items.forEach((item) => {
        item.style.opacity = '0';

        setTimeout(() => {
          item.style.display = 'none';
        }, 300);

        if (item.dataset['filter'] === filterClass) {
          setTimeout(() => {
            item.style.display = 'flex';
          }, 300);
          setTimeout(() => {
            item.style.opacity = '1';
          }, 400);
        }
      });
    }

    setTimeout(() => {
      swiperNews.update();
    }, 500);
  }
};

const initNews = () => {
  initSwiperNews();
  newsControlsContainer.addEventListener('click', onNewsButtonClick);
};

export {initNews};
