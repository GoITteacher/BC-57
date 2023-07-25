import colors from './colors.json';
import { loadFromLS, saveToLS } from './helpers.js';
const refs = {
  paletteElem: document.querySelector('.js-palette'),
};

function renderPalette(colors) {
  const markup = colors
    .map(({ hex, rgb }) => {
      return `<div class="color-card">
<div
    class="color-swatch"
    data-hex="${hex}"
    data-rgb="${rgb}"
    style="background-color: ${hex}"
></div>
<div class="color-meta">
    <p>HEX:${hex}</p>
    <p>RGB:${rgb}</p>
</div>
</div>`;
    })
    .join('');

  refs.paletteElem.innerHTML = markup;
}

renderPalette(colors);

refs.paletteElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const myElem = e.target.closest('.color-card').firstElementChild;
  const color = myElem.dataset.hex;

  document.body.style.backgroundColor = color;
  saveToLS('user-color', color);
});

function onPageLoad() {
  const color = loadFromLS('user-color') || 'white';
  document.body.style.backgroundColor = color;
}
onPageLoad();
