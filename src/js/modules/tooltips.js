import * as utils from "../modules/utils.js";
import { setActiveToggler } from "./utils.js";

export const allTipWrappers = document.querySelectorAll(`.tooltip-wrapper`);

allTipWrappers.forEach((wrapper) => {
  const tip = wrapper.querySelector(`.tooltip`);
  const body = wrapper.querySelector(`.tooltip-body`);

  setActiveToggler(tip, body);
});
