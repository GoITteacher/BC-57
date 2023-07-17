let myBtn = document.querySelector('#testButton');
let list = document.querySelector('.usernames');
myBtn.addEventListener('click', onBtnClick);
/* 
Створення
document.createElement(tagName);
*/

// function onBtnClick() {
//   const temp = document.createElement('li');
// }

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

// function onBtnClick() {
//   const myList = document.createElement('ul');

//   for (let i = 0; i < 10; i++) {
//     const liElem = document.createElement('li');
//     myList.append(liElem);
//   }

//   document.body.prepend(myList);
// }

// function onBtnClick() {
//   const myHeader = document.createElement('h1');
//   myHeader.textContent = 'Hello World';
//   list.before(myHeader);
// }

/* 
Видалення
elem.remove();
*/

function onBtnClick() {
  list.remove();
}
