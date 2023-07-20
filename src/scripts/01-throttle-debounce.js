const countMouseEventElement = document.querySelector('.js-count-mouse');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 1;
let countInputEvent = 1;

// document.addEventListener('mousemove', onMouseMove);
// document.addEventListener('mousemove', _.throttle(onMouseMove, 3000, {}));
// function onMouseMove() {
//   countMouseEventElement.textContent = countMouseEvent++;
// }

inputElement.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(e) {
  outputElem.textContent = e.target.value;
}
