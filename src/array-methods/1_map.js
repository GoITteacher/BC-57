/*

 - Поелементо перебирає оригінальний масив.
 - Не змінює оригінальний масив.
 - Результат роботи колбек-функції записується у новий масив.
 - Повертає новий масив однакової довжини.

*/

const arr = ['Hello', 'world', 'test', 'MAX'];

/* const result = arr.map((value, index, array) => {
  return `${index + 1} - ${value.toUpperCase()}`;
}); */

// const result = arr.map((value, index, array) => {
//   return `<li>${value.toUpperCase()}</li>`;
// });

// ['<li>HELLO</li>', '<li>WORLD</li>', '3 - TEST', '4 - MAX']

// console.log(result);
// =============

let users = [
  {
    name: '123',
    age: 12,
    phone: '+28099448',
  },
  {
    name: '234',
    age: 20,
    phone: '+28099854185',
  },
  {
    name: '345',
    age: 31,
    phone: '+280996161',
  },
  {
    name: '14523',
    age: 31,
    phone: '+280996161',
  },
  {
    name: '567',
    age: 31,
    phone: '+280996161',
  },
  {
    name: '121233',
    age: 31,
    phone: '+280996161',
  },
];

const copy = users.map((user, index) => {
  const copyUser = { ...user, index };
  return copyUser;
});

console.log(users);
console.log(copy);
