/*

 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає все, що завгодно.
 - Робить все, що завгодно.
*/

// const arr = [1000, 5512, 31104, 4403, 5225];

/* const result = arr.reduce((acc, el, idx, array) => {
  return acc + el;
}); */

// const filteredArray = arr.reduce((acc, el, idx, array) => {
//   if (el % 2 !== 0) {
//     acc.push(`${el}`);
//   }
//   return acc;
// }, []);

// const result = arr.reduce((acc, el, index, array) => {
//   el = `${el}`;
//   return acc || el.length > 4; //false
// }, false);

// console.log(result);

// ====================

// let users = [
//   {
//     name: '123',
//     age: 12,
//     phone: '+28099448',
//   },
//   {
//     name: '234',
//     age: 20,
//     phone: '+28099854185',
//   },
//   {
//     name: '345',
//     age: 32,
//     phone: '+280996161',
//   },
//   {
//     name: '14523',
//     age: 31,
//     phone: '+280996161',
//   },
//   {
//     name: '567',
//     age: 24,
//     phone: '+280996161',
//   },
//   {
//     name: '121233',
//     age: 37,
//     phone: '+280996161',
//   },
// ];

// const filteredArray = users.reduce((acc, el, index, array) => {
//   if (el.age > 25) {
//     acc.push(el.name, el.phone);
//   }
//   return acc;
// }, []);

// const filteredArray = users.reduce((acc, { age, ...user }, index, array) => {
//   if (age > 25) {
//     acc.push(user);
//   }
//   return acc;
// }, []);

console.log(filteredArray);
