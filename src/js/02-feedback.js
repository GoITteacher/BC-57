import '../css/common.css';
import '../css/feedback-form.css';
import { loadFromLS, saveToLS } from './helpers.js';

// посилання
const refs = {
  form: document.querySelector('.js-feedback-form'),
};

// прослуховувач інпут події
refs.form.addEventListener('input', e => {
  const key = e.target.name;
  const value = e.target.value;
  saveToLS(key, value);
});

// ================================= //
// Прослуховування сабміту
refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const name = e.target.elements.name.value;
  const message = e.target.elements.message.value;

  console.log({ name, message });

  localStorage.clear();
  e.target.reset();
});
// ================================= //

// при першому завантаженні виконати цю функцію
function onPageLoad() {
  const name = loadFromLS('name');
  const message = loadFromLS('message');

  refs.form.elements.name.value = name || 'Anonym';
  refs.form.elements.message.value = message || 'Empty message';
}
onPageLoad();
