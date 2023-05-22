import * as utils from "./utils.js";

const footer = document.querySelector(`.footer`);
const form = footer.querySelector(`.footer-form`);
const formSubmit = form.querySelector(`.footer-form__submit`);
const formInput = form.querySelector(`.footer-form__input`);
const formCheckboxes = form.querySelectorAll(`.footer-form__checkbox`);

formInput.addEventListener("input", (e) => {
  formSubmit.disabled = !utils.isMailValid(e.target.value) || !utils.isFormChecked(...formCheckboxes);
});

form.addEventListener("click", (e) => {
  if (e.target.closest(".footer-form__checkbox")) {
    formSubmit.disabled = !utils.isMailValid(formInput.value) || !utils.isFormChecked(...formCheckboxes);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  utils.findParent(e.target, "footer-item").querySelector(`.footer-item__text`).textContent = "Спасибо за подписку!";
  document.querySelector(`.footer-form`).remove();
});
