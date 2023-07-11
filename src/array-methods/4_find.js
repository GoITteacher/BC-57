/*
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
 - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
*/

let users = [
  {
    name: '123',
    age: 12,
    phone: '+28099448',
    isStudent: true,
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
    isStudent: true,
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
    isStudent: true,
  },
  {
    name: '124234',
    age: 31,
    phone: '+280996161',
  },
];

// const findUser = users.find((user, idx, array) => {
//   return user.name.includes('4ssrsefawd');
// });
const findUser = users.find(user => user.isStudent);

console.log(findUser);
// console.log(users);
