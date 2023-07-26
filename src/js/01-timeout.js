import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

/* console.log(1);

setTimeout(() => {
  console.log(3);
}, 10);

for (let i = 0; i < 10000; i++) {
  console.log('Hello');
}

console.log(2); */

// setTimeout(() => {
//   console.log(5);
// }, 5000);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// setTimeout(() => {
//   console.log(4);
// }, 4000);

// setTimeout(() => {
//   console.log(1);
// }, 1000);

// for (let i = 0; i < 100000; i++) {
//   console.log('Hello');
// }

const x1 = setTimeout(() => {
  console.log(5);
}, 5000);
const x2 = setTimeout(() => {
  console.log(3);
}, 3000);
const x3 = setTimeout(() => {
  console.log(4);
}, 4000);
const x4 = setTimeout(() => {
  console.log(1);
}, 1000);

console.log(x1, x2, x3, x4);
/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

clearTimeout(x1);
clearTimeout(x2);
clearTimeout(x3);
clearTimeout(x4);
