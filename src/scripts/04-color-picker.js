let colorPalette = [];
const LENGTH = 9;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
////////////////////////////////////////////////////////////////////////////

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

////////////////////////////////////////////////////////////////////////////

function renderCards(palette) {
  const markup = palette
    .map(color => {
      return `<li class="color-item">
    <button class="color-body" style="background-color: ${color.hex}"></button>
    <div class="color-footer">
      <div>HEX: ${color.hex}</div>
      <div>RGB: ${color.rgb}</div>
      <div></div>
    </div>
  </li>`;
    })
    .join('\n');

  refs.itemList.innerHTML = markup;
}
renderCards(colorPalette);

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  refs.modalElement.style.backgroundColor = e.target.style.backgroundColor;
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', onModalEscape);
});

refs.backdropElem.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onModalEscape);
});

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  renderCards(colorPalette);
});

function onModalEscape(e) {
  if (e.code === 'Escape') {
    document.body.classList.remove('show-modal');
    document.removeEventListener('keydown', onModalEscape);
  }
}
