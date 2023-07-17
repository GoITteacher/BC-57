let myBtn = document.querySelector('#testButton');
let imgElem = document.querySelectorAll('img');

myBtn.addEventListener('click', onBtnClick);

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

// function onBtnClick() {
//   const myImageElem = document.querySelector('#imgTest');
//   console.log(myImageElem);

//   const temp = myImageElem.hasAttribute('awdawd');
//   console.log(temp);
// }

// function onBtnClick() {
//   const myImageElem = document.querySelector('#imgTest');

//   const temp = myImageElem.getAttribute('alt');
//   console.log(temp);
// }

// function onBtnClick() {
//   const myImageElem = document.querySelector('#imgTest3');

//   myImageElem.setAttribute(
//     'src',
//     'https://source.unsplash.com/100x100/?random=999&eat,bread,dish,meet,egg',
//   );
// }
// function onBtnClick() {
//   const myImageElem = document.querySelector('#imgTest');
//   myImageElem.removeAttribute('disabled');
// }

// function onBtnClick() {
//   const myImageElem = document.querySelector('#imgTest');
//   console.log(myImageElem.attributes.item(2));
// }

// function onBtnClick() {
//   const myImageElem = document.querySelector('#imgTest3');

//   myImageElem.setAttribute('test', 'hello');
// }

// function onBtnClick() {
//   const myImageElem = document.querySelector('#imgTest3');
//   console.log(myImageElem.dataset.id);
// }
