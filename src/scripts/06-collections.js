let myBtn = document.querySelector('#testButton');
let list = document.querySelector('ul');
myBtn.addEventListener('click', onBtnClick);
/* 
Властивість innerHTML
 - Читання
 - Зміна
 - Додавання
 - insertAdjacentHTML
*/

// console.dir(list.innerHTML);
// console.dir(list.textContent);

// function onBtnClick() {
//   let text = '';

//   for (let i = 0; i < 10; i++) {
//     text += `<li class="bold">${i}. Hello</li>\n`;
//   }

//   list.innerHTML += text;
// }

let counter = 1;
function onBtnClick() {
  let markup = '';

  for (let i = 0; i < 10; i++) {
    markup += `<li>HELLO ${counter++}</li>`;
  }

  list.insertAdjacentHTML('afterend', markup);
}
