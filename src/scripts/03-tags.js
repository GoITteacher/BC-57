let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
  btnElem: document.querySelector('.js-btn'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const targetElem = e.target.closest('li');
  targetElem.classList.toggle('active');
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const oldElem = e.currentTarget.querySelector('.active');
  oldElem?.classList.remove('active');

  const targetElem = e.target.closest('li');
  targetElem.classList.add('active');
});

refs.btnElem.addEventListener('click', () => {
  const tags = [...refs.firstTagsList.querySelectorAll('.active')].map(elem => {
    return elem.textContent.trim();
  });
  const tag = refs.secondTagsList.querySelector('.active').textContent.trim();

  console.log(tags);
  console.log(tag);
});
