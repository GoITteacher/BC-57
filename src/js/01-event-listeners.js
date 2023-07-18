/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');
// function handleTargetBtnClick(){}
// function targetBtnClickHandler(){}

addListenerBtn.addEventListener('click', onAddBtnClick);
removeListenerBtn.addEventListener('click', onRemoveBtnClick);

function onTargetBtnClick(evt) {
  console.log(evt.target);
  const userName = prompt('Enter your name');
  const markup = `<li>${userName}</li>`;
  divContainer.insertAdjacentHTML('beforeend', markup);
}

function onAddBtnClick(evt) {
  console.log(evt.target);
  console.log('add listener');
  targetBtn.addEventListener('click', onTargetBtnClick);
}
function onRemoveBtnClick(evt) {
  console.log(evt.target);
  console.log('remove listener');
  targetBtn.removeEventListener('click', onTargetBtnClick);
}
