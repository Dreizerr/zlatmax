import * as nouislider from "../modules/nouislider.min.js";

const rangeSliders = document.querySelectorAll(`.range-slider`);

if (rangeSliders.length) {
  rangeSliders.forEach((blockSlider) => {
    const fromInput = blockSlider.querySelector(`[data-range-from]`);
    const toInput = blockSlider.querySelector(`[data-range-to]`);

    const slider = blockSlider.querySelector(`.range-slider__slider`);

    noUiSlider.create(slider, {
      start: [fromInput.value, toInput.value],
      connect: true,
      tooltips: [true, true],
      range: {
        min: Number(fromInput.dataset.rangeFrom),
        max: Number(toInput.dataset.rangeTo),
      },

      step: Number(blockSlider.dataset.rangeStep) || 5,
      format: {
        to: (v) => v | 0,
        from: (v) => v | 0,
      },
    });

    slider.noUiSlider.on("update", (values, handle) => {
      fromInput.value = values[0];
      toInput.value = values[1];
    });

    // const Sticks = slider.querySelectorAll(`.noUi-origin`);
    // const leftStick = Sticks[0];
    // const rightStick = Sticks[1];

    // const handles = slider.querySelectorAll(`.noUi-handle`);
    // const leftHandle = handles[0];
    // const rightHandle = handles[1];

    // const connect = slider.querySelector(`.noUi-connect`);

    // fromInput.addEventListener("input", (e) => {
    //   if (Number(fromInput.value) < Number(fromInput.dataset.rangeFrom)) return false;
    //   else if (Number(fromInput.value) > Number(toInput.dataset.rangeTo)) return false;
    //   else if (Number(e.target.value) > Number(toInput.value)) return false;
    //   else {
    //     leftStick.style.transform = `translate(-${
    //       100 - ((Number(fromInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100
    //     }%, 0px)`;

    //     leftHandle.setAttribute("aria-valuenow", e.target.value);
    //     leftHandle.setAttribute("aria-valuetext", e.target.value);
    //     leftHandle.querySelector(`.noUi-tooltip`).textContent = e.target.value;

    //     connect.style.transform = `translate(${
    //       100 - (100 - ((Number(fromInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100)
    //     }%, 0px) scale(${
    //       100 -
    //       ((Number(fromInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100 -
    //       (100 - ((Number(toInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100)
    //     }%, 1)`;
    //   }
    // });

    // toInput.addEventListener("input", (e) => {
    //   if (Number(toInput.value) < Number(fromInput.dataset.rangeFrom)) return false;
    //   else if (Number(toInput.value) > Number(toInput.dataset.rangeTo)) return false;
    //   else if (Number(e.target.value) < Number(fromInput.value)) return false;
    //   else {
    //     rightStick.style.transform = `translate(-${
    //       100 - ((Number(toInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100
    //     }%, 0px)`;

    //     rightHandle.setAttribute("aria-valuenow", e.target.value);
    //     rightHandle.setAttribute("aria-valuetext", e.target.value);
    //     rightHandle.querySelector(`.noUi-tooltip`).textContent = e.target.value;

    //     connect.style.transform = `translate(${
    //       100 - (100 - ((Number(fromInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100)
    //     }%, 0px) scale(${
    //       100 -
    //       ((Number(fromInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100 -
    //       (100 - ((Number(toInput.value) - 2000) / (Number(toInput.dataset.rangeTo) - 2000)) * 100)
    //     }%, 1)`;
    //   }
    // });
  });
}
