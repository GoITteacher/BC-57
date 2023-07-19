/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
};

refs.descendant.addEventListener('click', e => {
  console.log('DESCENDANT1');
});

refs.descendant.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log('DESCENDANT2');
});

refs.descendant.addEventListener('click', e => {
  console.log('DESCENDANT3');
});

refs.child.addEventListener('click', e => {
  e.stopPropagation();
  console.log('CHILD', e.currentTarget, e.target);
});

refs.parent.addEventListener('click', e => {
  e.stopPropagation();
  console.log('PARENT', e.currentTarget, e.target);
});
