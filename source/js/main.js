import {iosVhFix} from './utils/ios-vh-fix';
import {initAccordions} from './modules/accordion/init-accordion';
import {initNews} from './modules/news/init-news';
import {initModals} from './modules/modals/init-modals';
import {initSwiper} from './modules/swiper/init-swiper';
import {controlSwiper} from './modules/swiper/control-swiper';
import {createMap} from './modules/map/map';
import {CustomSelect} from './modules/select/custom-select';
import {Form} from './modules/form-validate/form';
import {Burger} from './modules/header/burger';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    const burger = new Burger();
    burger.init();
    const select = new CustomSelect();
    select.init();
    initAccordions();
    initNews();
    initSwiper();
    controlSwiper();
    createMap();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
