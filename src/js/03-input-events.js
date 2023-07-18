/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', evt => {
//   evt.target.classList.remove('wrong');
//   evt.target.classList.remove('ok');
// });

// refs.input.addEventListener('blur', evt => {
//   const userValue = evt.currentTarget.value;
//   if (userValue.length > 6) {
//     evt.target.classList.add('ok');
//   } else {
//     evt.target.classList.add('wrong');
//   }
// });

refs.input.addEventListener('input', evt => {
  const userName = evt.target.value;
  refs.nameLabel.textContent = userName || 'Anonym';
});

// refs.input.addEventListener('change', evt => {
//   console.log(evt.currentTarget.value);
// });

refs.licenseCheckbox.addEventListener('change', evt => {
  const isEnabled = evt.target.checked;
  refs.btn.disabled = !isEnabled;
});

refs.btn.addEventListener('click', () => {
  console.log(refs.nameLabel.textContent);
});
