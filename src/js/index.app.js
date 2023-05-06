import * as utils from "./modules/utils.js";
import * as headerJs from "./modules/header.js";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const introSwiper = new Swiper(".intro__swiper", {
  // autoHeight: true,
  spaceBetween: 150,
  // simulateTouch: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1500,
  loop: true,
});

utils.isWebp();
