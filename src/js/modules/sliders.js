import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

if (document.querySelector(`.intro__swiper`)) {
  const introSwiper = new Swiper(".intro__swiper", {
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
    breakpoints: {},

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
}

if (document.querySelector(".product-slider__slider")) {
  const productSwiper = new Swiper(".product-slider__slider", {
    spaceBetween: 20,
    simulateTouch: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".product-slider__pagination",
      type: "bullets",
      clickable: true,
    },
    speed: 2500,
    slidesPerView: 4,
    slidesPerGroup: 4,
    breakpoints: {
      350: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },

      700: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },

      1050: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },

      1350: {
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
    },
  });
}

if (document.querySelector(`.alternative-product-slider__slider`)) {
  const alternativeProductSlider = new Swiper(".alternative-product-slider__slider", {
    spaceBetween: 20,
    simulateTouch: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".product-slider__pagination",
      type: "bullets",
      clickable: true,
    },
    speed: 2500,
    slidesPerView: 3,
    slidesPerGroup: 3,
    breakpoints: {
      350: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },

      1100: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },

      1350: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
    },
  });
}
