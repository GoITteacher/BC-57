/*
 - Метод flatMap(callback) - аналогічний методу map(),
 - але застосовується у випадках, коли результат - це багатовимірний масив,
 - який необхідно «розгладити».
*/

// const arr = ['Hello', 'world', 'test', 'MAX'];
// const result = arr.flatMap((value, index, array) => {
//   return `${index + 1} - ${value.toUpperCase()}`;
// });

const arr = [1, [2, [3, 4]], [5, 6]];

const result = arr.flatMap(el => {
  return el;
});

console.log(result);

let objs = [
  {
    name: '123',
    friend: ['Jonh1', 'Marta1'],
  },

  {
    name: '123',
    friend: ['Jonh2', 'Marta3'],
  },

  {
    name: '123',
    friend: ['Jonh4', 'Marta5'],
  },

  {
    name: '123',
    friend: ['Jonh6', 'Marta7'],
  },
];

const allFriends = objs.flatMap((user, idx, array) => {
  return user.friend;
});

// console.log(allFriends);

// const arr1 = [1, [2, 3], [4, 5], [6, 7, [9, [9]], [8, 5]], [3, 2, 4, 5], 7];

// console.log(arr1.flat(100));
