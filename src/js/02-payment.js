/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [100, 28, 105, 70, 92, 17, 120, 12, 25, 90];
const sale = 10;
let total = 0;
for (const elem of cart) {
  total += elem;
}

console.log(total * 0.9);
