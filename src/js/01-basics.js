/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

/* let arr = [1, 2, 3, 4, 5, 6];
console.log(arr[5]);
arr[5] = 'HELLO';
console.log(arr[5]);

let num = 10;
num = 15;
console.log(num); */

// let arr = [1, 2, 3, 4, 34, 12, 456, 2, 567, 34, 45, 3, 2, 45, 2];
// const len = arr.length;
// console.log(arr[arr.length - 1]);

/* arr[1] = 'TEST';
arr[5] = 'TEST1';
arr[7] = 'TEST2';
arr[15] = 'NEW VALUE';
arr[100000] = 'NEW BOOK';
console.log(arr); */

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// num, string, bool, null, undefined, symbol

const num1 = 10;
const num2 = 10;

// console.log(num1 === num2);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

/* const a = [1, 2, 3];
const b = a;

a[0] = 123;
console.log(b[0]);

a[3] */

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// const arr = [1, 2, 3];
// const arr1 = [1, 2, 3];
/* const arr2 = [1, 2, 3];
for (let i = arr.length; i >= 0; i--) {
  console.log(arr[i]);
  console.log(arr1[i]);
  console.log(arr2[i]);
}
console.log(arr);

for (let elem of arr) {
  console.log(elem);
}
console.log(arr); */

/*
 * - split розділяє
 * - join обьєднує
 * - indexOf - шукає індекс
 * - includes - перевіряє
 * - push
 * - pop
 * - shift
 * - unshift
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'Ajax', 'Ajax'];
//
// const myArr = 'Hello world test nyVar sef sef-awd'.split(' ').length;
// console.log(myArr);

// const result = friends.join('\n');
// console.log(result);

// const myIndex = friends.indexOf('Ajax');
// const myIndex1 = friends.lastIndexOf('Ajax');
// console.log(myIndex, myIndex1);

// const res = friends.includes('Kiwi');
// console.log(res);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

/*conso le.log(friends);

friends.push('HELLO', 'Hello1', 'Hello2');

friends.pop();
friends.pop();
friends.pop(); */
// const lastElem = friends.pop();
// console.log(friends);

//============

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// friends.shift();
// friends.shift();
// friends.unshift('1'); //3
// friends.unshift('2'); // 4
// friends.unshift('3'); // 5
// console.log(friends);

// ================

// const friends = [
//   'Mango',
//   'Kiwi',
//   'Poly',
//   'Ajax',
//   'sef1',
//   'sef2',
//   'sef3',
//   'sef4',
//   'sef5',
// ];

// const myArray = friends.slice(0, -5);
// console.log(myArray);

// const newArray = friends.splice(-3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
// console.log(newArray);

const a = [1, 2, 3]; // '1,2,3'
const b = [2, 3, 4]; // '2,3,4'

const x = [].concat(a, b, [123], [123, 234, 345]);

console.log(x);
