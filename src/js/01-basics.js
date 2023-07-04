/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */
/* 
function clear() {
  console.log('------------');
  console.log('Hello World1');
  console.log('Hello World2');
  console.log('Hello World3');
  console.log('Hello World4');
  console.log('Hello World5');
  console.log('------------');
} */

/* function foo(age) {
  let age = 14
  if (age >= 18) {
    console.log('OK!');
  } else {
    console.log('Not Ok!');
  }
}

foo(19);
foo(14);
foo(17); */

/* function sum(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
}

sum(10, 20, 345, 456, 678, 789, 890);
sum(5, 5);
sum(7, -20);
sum(3, 6); */

// function sum() {
//   console.log(arguments);
//   const arr = Array.from(arguments);
//   console.log(arr);
//   let total = 0;
//   for (let el of arguments) {
//     total += el;
//   }
//   console.log(total);
// }

// sum('1', '2', '3', '4');
// sum(1, 2);
// sum(1, 2, 3, 4, 5, 6, 7, 8);
// sum(1, 2, 3, 4, 3, 4, 6, 7, 8, 8, 8);

/* function foo(money) {
  if (money > 100) {
    return 'PRODUCTS';
  } else {
    return 'NON';
  }
}

const num = foo(50);
console.log(num); */

// debugger;
/* function sum(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}

const q1 = sum(2, 2); // 4
const q2 = multiply(6, 3); // 18
const total = sum(q1, q2); //22

console.log(total);

const totalSum = n / 5; */

/* function sum(x = 0, y = 0) {
  console.log(`${x} + ${y} = ${x + y}`);
}

sum(10, 20);
sum(10);
sum(); */

// function pow(num, power = 2) {
//   console.log(`${num} ^ ${power} = ${num ** power}`);
// }
// pow(4, 5);

// ==============================

/* function myFun(numbers) {
  console.log(numbers);

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      return i;
    }
  }

  return -1;
}

const nums = [1, 3, 5, 7, 5, 2, 3, 5, 5, 3, 63, 7];

const index = myFun(nums);
console.log(index); */

/* function foo(x, y) {
  if (y === 0) return 0;

  console.log(`${x} / ${y} = ${x / y}`);

  return x / y;
}

const result = foo(10, 2);

console.log(result); */

/* function foo() {}

const myFun = function () {
  console.log('HELLO');
};

const myFun1 = myFun;
myFun();
myFun1(); */

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */

// function foo1() {
//   foo2();
// }
// function foo2() {
//   foo3();
// }
// function foo3() {
//   foo4();
// }
// function foo4() {
//   console.log('1');
//   console.log(sefsefsef);
// }

// foo1();

// function foo(i) {
//   console.log(i);
//   foo(i + 1);
// }

// foo(0);

/* function fibba(index) {
  if (index <= 2) return 1;
  else {
    return fibba(index - 1) + fibba(index - 2);
  }
} */

// const result = fibba(7);
// console.log(result);

// function factorial(num) {
//   if (num <= 1) return 1;
//   return num * factorial(num - 1);
// }
// debugger;
// const result = factorial(4);
// console.log(result);

// ===============

//============

function foo() {
  const t = 100;
}

function foo1() {
  const t = 112;
}

console.log(t);
