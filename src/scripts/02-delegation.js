let refs = {
  firstBoxElem: document.querySelector('.js-box'),
  secondBoxElem: document.querySelector('.js-box-1'),
};

// console.log(refs.firstBoxElem);
// refs.firstBoxElem.addEventListener('click', e => {
//   console.log(123);
//   if (e.target === e.currentTarget) return;
//   console.log(e.target.textContent);
// });

// ============================

// refs.firstBoxElem.addEventListener('click', e => {
//   const nodeName = e.target.nodeName;
//   if (nodeName !== 'SPAN' && nodeName !== 'BUTTON') return;
//   console.log('HELLO');
// });

// ============================

// refs.firstBoxElem.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;
//   const liElem = e.target.closest('li');
//   console.log(liElem.dataset.id);
// });
