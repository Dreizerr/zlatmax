import * as choices from "../modules/choices.min.js";

if (document.querySelector(`.product-options__select`)) {
  const selects = document.querySelectorAll(`.product-options__select`);
  selects.forEach((select) => {
    new Choices(select, {
      placeholder: true,
      searchEnabled: false,
      allowHTML: false,
    });
  });
}
