/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называется
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

/* function foo() {
  const x = function () {
    console.log('HELLO WORLD');
  };
  return x;
}

const result1 = foo();

result(); */
/*
 * функция doMath(a, b, callback)
 */

/* 
function doMath(a, b, callback) {
  callback(a, b);
  //   sum(10,20)
}

const x1 = 10;
const x2 = 20;

function sum(a, b) {
  console.log(a + b);
}
function multiply(a, b) {
  console.log(a * b);
}
 */
// doMath(x1, x2, sum); //10 20 = 30
// doMath(x2, x2, sum); //20 20 = 40
// doMath(x1, x2, multiply); // 10 20 = 200
// doMath(x1, x1, multiply); // 10 10 = 100

/*
 * Отложенный вызов: регистрация событий
 */

// function sayHello() {
//   console.log('Hello World');
// }

// const btn = document.querySelector('.js-button');
// btn.addEventListener('click', sayHello);

/*
 * Отложенный вызов: интервалы
 */

// setInterval(sayHello, 1000);
// ================================================

// function foo(callback) {
//   callback();
// }
// function sayHello() {
//   console.log('hello');
// }

// foo(sayHello);
// foo(() => {});
