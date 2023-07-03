/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

let nums = [2, 6, 6, 7, 3, 7, -1, 2, 2, 3, 6, 9];
let minIndex = 0;

let min = Infinity;

for (const num of nums) {
  if (num < min) {
    min = num;
  }
}

console.log(min);
