import * as utils from "./modules/utils.js";
import * as header from "./modules/header.js";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const introSwiper = new Swiper(".intro__swiper", {
  autoHeight: true,
  spaceBetween: 150,
  simulateTouch: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".intro__swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  speed: 1500,
  loop: true,
  breakpoints: {
    900: {
      autoHeight: false,
    },
  },

  on: {
    slideChange: function () {
      const fracCurrent = document.querySelector(`.intro__swiper-frac-current`);
      const fracAll = document.querySelector(`.intro__swiper-frac-all`);
      let currentSlide = this.realIndex + 1;

      currentSlide = currentSlide < 10 ? `0${currentSlide}` : currentSlide;
      fracCurrent.textContent = currentSlide;
    },

    afterInit: function () {
      const fracCurrent = document.querySelector(`.intro__swiper-frac-current`);
      const fracAll = document.querySelector(`.intro__swiper-frac-all`);
      let currentSlide = this.realIndex + 1;
      currentSlide = currentSlide < 10 ? `0${currentSlide}` : currentSlide;
      fracCurrent.textContent = currentSlide;

      const introSwiperDOM = document.querySelector(`.intro__swiper`);
      let allSlides = introSwiperDOM.querySelectorAll(`.swiper-slide`).length;
      allSlides = allSlides < 10 ? `0${allSlides}` : allSlides;
      fracAll.textContent = allSlides;
    },
  },
});

utils.isWebp();
