/*
 * Перебор через for...in
 и Object.keys|values|entries
 */

let feed = {
  bad: 8,
  good: 5,
  neutral: 10,
};

/* let feedback = Object.create(feed);
console.log(feedback);
feedback.test = 'myTest';

for (let key in feedback) {
  console.log(feedback[key]);
} */

//=================================

const user = {
  name: 'Max',
  age: 12,
  phoneNumber: 1231323432,
  location: 'Ukraine',
};

// const user1 = Object.create(user);
// user1.test = 'TEST';
// console.log(Object.keys(user1)); // []
// console.log(Object.values(user1)); // []
// console.log(Object.entries(user1)); // []

// for (let arr of Object.entries(user)) {
//   const key = arr[0];
//   const value = arr[1];
//   console.log(arr[0], arr[1]);
// }
