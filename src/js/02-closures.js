/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

/* function foo() {
  const y = 20;
  const q1 = 30;

  const myFun = function (x) {
    //const y = 20;
    console.log('Hello World', x, y);
  };

  return myFun;
}

const resultFunction = foo();

resultFunction(10); */

// ===================================

function calc(base) {
  const myCalc = function (x, y) {
    console.log((x + y) * base);
  };
  return myCalc;
}

const result1 = calc(2);
const result2 = calc(5);
const result3 = calc(10);

result1(1, 1);
result1(2, 2);
result1(3, 3);

result2(1, 1);
result2(2, 2);
result2(3, 3);

// ==========

function foo1() {
  return 'Hello';
}

const x1 = foo1();
console.log(x1);
