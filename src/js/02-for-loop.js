/*
 * Цикл while
 */

/* let money = 100;

while (money < 100) {
  money += 350;
}

console.log(money); */

/*
 * Цикл do while
 */

/* money = 100;
do {
  money += 350;
} while (false);

console.log(money); */

/*
 * Цикл for
 */
// debugger;

/* for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

console.log('go to home'); */

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;

for (let i = 0; i < employees; i++) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );

  totalSalary += salary;
}

console.log(totalSalary);
// console.log(i++)
// console.log(i)
// i+=1;

// i = 1;
// console.log(++i);
// i += 1;
// console.log(i);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

let min = 50;
let max = 75;

let total = 0;
for (let i = min; i <= max; i++) {
  if (i % 2 !== 0) continue;
  total += i;
}
console.log(total);

// for (let i = 0; i < 10; i++) {
//   const condition = confirm('Resume?');
//   if (!condition) continue;
//   console.log(i);
// }

// console.log('end');

// const userNumber = +prompt('Enter your number'); // 50
// for (let i = 1; i <= 100; i++) {
//   if (i % userNumber === 0) break;
//   console.log(i);
// }

// console.log(sum);
