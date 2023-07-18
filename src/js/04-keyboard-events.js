/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

document.addEventListener('keypress', evt => {
  if (evt.shiftKey && evt.code === 'KeyS') {
    console.log('SUPER SAVE');
  }
});

document.addEventListener('keydown', evt => {
  const userChar = evt.key;
  refs.output.textContent += userChar;
});

refs.clearBtn.addEventListener('click', () => {
  refs.output.textContent = '';
});
/* document.addEventListener('keyup', evt => {
  console.log(evt);
  const { code, key, keyCode } = evt;
  console.log(code);
  console.log(key, keyCode);
});
 */
