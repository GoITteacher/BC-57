/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');
const boxElem = document.querySelector('.inner-box');
boxElem.style.position = 'absolute';
/* boxRef.addEventListener('mouseenter', evt => {
  evt.currentTarget.classList.add('box--active');
});

boxRef.addEventListener('mouseleave', evt => {
  evt.currentTarget.classList.remove('box--active');
});
 */

// boxRef.addEventListener('mouseover', evt => {
//   console.log('over');
//   //   evt.currentTarget.classList.add('box--active');
// });

// boxRef.addEventListener('mouseout', evt => {
//   console.log('out');
//   //   evt.currentTarget.classList.remove('box--active');
// });

boxRef.addEventListener('mousemove', evt => {
  console.log(evt.clientX, evt.clientY);
  boxRef.style.left = `${evt.clientX} px`;
  boxRef.style.top = `${evt.clientY} px`;
});
