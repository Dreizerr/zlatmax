import * as utils from "./modules/utils.js";
import * as header from "./modules/header.js";
import * as footer from "./modules/footer.js";
import * as sliders from "./modules/sliders.js";

utils.isWebp();
utils.tagTextInTitleAttr();

const controlls = document.querySelector(`.filter-controlls`);

controlls.addEventListener("click", (e) => {
  if (e.target.closest(".filter-controlls-item__spoiler-header ")) {
    e.target.closest(".filter-controlls-item ").classList.toggle("closed");
  }
});
