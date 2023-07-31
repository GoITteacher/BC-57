// OBJECT ENTRIES

const objUser = {
  name: 'Max',
  age: 23,
  phoneNumber: '=380',
  isStudent: true,
};

// for (const key of Object.keys(objUser)) {
//   console.log(key, objUser[key]);
// }

// for (const i of Object.entries(objUser)) {
//   console.log(i);
// }

// for (const [key, value] of Object.entries(objUser)) {
//   console.log(key, value);
// }

// [  ['name', 'Max'],  ['age', 23],  ['phone', '123'],  ['isStudent', true],    ]
// ===============

// For IN

// const user = {
//   t: 0,
//   name: 'user',
// };

// const user1 = {
//   a: 10,
//   b: 20,
//   c: 30,
//   __proto__: user,
// };

// const user2 = {
//   x: 50,
//   y: 60,
//   __proto__: user1,
// };

// for (const key in user2) {
//   console.log(key);
// }

// ============================

// const user = {
//   x: 10,
//   y: 20,
//   name: 'Vasya',
// };

// const zip = JSON.stringify(user);
// localStorage.setItem('myMovies', zip);

// const test = localStorage.getItem('myMovies');

// console.log(JSON.parse(test));

// =============================
