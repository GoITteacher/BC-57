let myBtn = document.querySelector('#testButton');
let listItem = document.querySelector('.js-list');
myBtn.addEventListener('click', onBtnClick);
/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

// console.log(listItem.classList.contains('list-dark'));
// console.log(listItem.classList.contains('list-Dark'));

// function onBtnClick() {
//   console.log(listItem);
//   listItem.classList.add('box', 'bold');
//   console.log(listItem);
// }

// function onBtnClick() {
//   if (listItem.classList.contains('box')) {
//     listItem.classList.remove('box', 'bold');
//   } else {
//     listItem.classList.add('box', 'bold');
//   }
// }

// function onBtnClick() {
//   listItem.classList.toggle('bold');
// }

function onBtnClick() {
  listItem.classList.replace('list-dark', 'box');
}

/* 
Властивість style
*/

listItem.style.border = '1px solid black';
listItem.style.backgroundColor = 'silver';
listItem.style.width = '120px';
listItem.style.height = '20px';
listItem.style.overflow = 'auto';
console.log(listItem.style);
