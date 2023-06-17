import * as utils from "./modules/utils.js";
import * as header from "./modules/header.js";
import * as footer from "./modules/footer.js";
import * as sliders from "./modules/sliders.js";
import * as tooltips from "./modules/tooltips.js";
import * as selects from "./modules/selects.js";
import * as tabs from "./modules/tabs.js";

utils.isWebp();
utils.tagTextInTitleAttr();

const blockInfo = document.querySelector(`.product-block-info`);

const amount = document.querySelector(`.product-amount`);
const plusButton = amount.querySelector(`.product-amount__plus`);
const minusButton = amount.querySelector(`.product-amount__minus`);

let amountNumber = amount.querySelector(`.product-amount__number`);
const productPriceDOM = document.querySelector(`.product-price__number`);

let productPrice = +productPriceDOM.textContent.split(" ").join("");

blockInfo.addEventListener("click", (e) => {
  if (e.target.closest(".product-amount__plus")) {
    amountNumber.textContent++;
  }

  if (e.target.closest(".product-amount__minus")) {
    if (amountNumber.textContent === "1") return false;
    amountNumber.textContent--;
  }

  let priceMultiply = amountNumber.textContent;

  let price = (productPrice * priceMultiply).toLocaleString("ru");

  productPriceDOM.textContent = price;
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".tooltip-question")) {
    if (tooltips.allTipWrappers.length) {
      tooltips.allTipWrappers.forEach((wrapper) => {
        const body = wrapper.querySelector(`.tooltip-body`);
        body.classList.remove("active");
      });
    }
  }
});
