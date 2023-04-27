import * as utils from "./utils.js";
import { useDynamicAdapt } from "./dynamicAdapt.js";
// import { burgerToggler } from "./menuBurger.js";

const header = document.querySelector(`.header`);
const phoneSpoiler = document.querySelector(".header-actions__spoiler-arrow");
const phoneOrder = document.querySelector(".header-actions__phone");
const catalogLinks = document.querySelectorAll(".menu-catalog__link");
const catalog = document.querySelector(`.menu-catalog__list`);

// window.catalog = catalog;

const menu = document.querySelector(`.header-top-menu`);

// burgerToggler(menuBurger, menu);

useDynamicAdapt("max");

header.addEventListener("click", headerActions);

function headerActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".menu-burger")) {
    if (targetElement.closest(".menu-burger--active")) {
      targetElement.closest(".menu-burger").classList.remove(`menu-burger--active`);
      document.body.classList.remove(`scroll-lock`);
      menu.classList.remove(`header-top-menu--active`);
      catalog.classList.remove(`header-top-menu__sub-menu--active`);
    } else {
      targetElement.closest(".menu-burger").classList.add(`menu-burger--active`);
      document.body.classList.add(`scroll-lock`);
      menu.classList.add(`header-top-menu--active`);
    }
  }

  if (targetElement.closest(".back")) {
    utils
      .findParent(targetElement, `header-top-menu__sub-menu--active`)
      .classList.remove(`header-top-menu__sub-menu--active`);
  }

  if (targetElement.closest("[data-catalog-parent]")) {
    const subMenuId = targetElement.dataset.catalogParent ? targetElement.dataset.catalogParent : null;

    const subMenuBlock = document.querySelector(`[data-catalog-child="${subMenuId}"]`);

    if (subMenuBlock) {
      const activeLink = document.querySelector(`.menu-catalog__link--active`);
      const activeBlock = document.querySelector(`.sub-menu-catalog__block--active`);

      if (activeLink && targetElement !== activeLink) {
        activeLink.classList.remove(`menu-catalog__link--active`);
        activeBlock.classList.remove("sub-menu-catalog__block--active");
      }

      targetElement.classList.toggle("menu-catalog__link--active");
      subMenuBlock.classList.toggle("sub-menu-catalog__block--active");
    } else {
      console.log("Подменю не существует");
    }
  }

  if (targetElement.closest(".header-top-menu__link-catalog")) {
    catalog.classList.add("header-top-menu__sub-menu--active");
  }
}
utils.setActiveToggler(phoneSpoiler, phoneOrder);
