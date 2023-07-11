/*

 - Поелементно перебирає масив.
 - Викликає колбек-функцію для кожного елемента масиву.
 - Нічого не повертає.

*/

const arr = [99, 2, 3, 4, 5, 6, 7, 8, 9, 0, 6, 4];

const result = arr.forEach((el, index, array) => {
  console.log(index, el);
});

console.log(result);
