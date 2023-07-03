/*
 * Напиши скрипт который подсчитывает сумму всех чётных
 чисел в массиве.
 */

const numbers = [1, 2, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
let count = 0;

for (let elem of numbers) {
  if (elem % 2 === 0) total += elem;
}

console.log(total);
