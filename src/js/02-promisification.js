/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

/* function createPromise(value, isFulfilled, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
  return promise;
}

const p1 = createPromise(100, true, 1000);
const p2 = createPromise(200, false, 5000);
const p3 = createPromise(300, true, 3000); */

// p1.then(res => console.log(res)).catch(res => {
//   console.log(`Err - ${res}`);
// });

// p2.then(res => console.log(res)).catch(res => {
//   console.log(`Err - ${res}`);
// });

// p3.then(res => console.log(res)).catch(res => {
//   console.log(`Err - ${res}`);
// });

// createPromise().then(res => console.log(res));

// function foo() {
//   const obj = {
//     name: 123,
//     sayHello() {
//       console.log(hello);
//     },
//   };

//   return obj;
// }

// foo().sayHello();
// function foo() {
//   const arr = [1, 2, 3, 4, 5, 6, 7];
//   return arr;
// }

// const arr = foo();
// arr.map()
/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// function createPromise(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, 1000);
//   });
// }

// const arrow = value => {
//   return Promise.resolve(value);
// };

// const p1 = arrow(123);
// console.log(p1);

// ==============================

/* 
- all
- allSettled
- race
*/

function createPromise(value = 'default', isFulfilled = true, delay = 0) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
        resolve(`${value} - ${delay}`);
      } else {
        reject(`${value} - ${delay}`);
      }
    }, delay);
  });

  return promise;
}

/* const promises = [];

for (let i = 0; i < 10; i++) {
  const myPromise = createPromise(
    `Promise - ${i}`,
    true,
    Math.random() * 10000,
  );
  promises.push(myPromise);
}

console.log(promises);

Promise.all(promises).then(result => {
  console.log(result);
}); */
//===========

const p1 = createPromise(1, false, 1000);
const p2 = createPromise(2, true, 4000);
const p3 = createPromise(3, false, 3000);
const p4 = createPromise(4, true, 2000);

const promises = [p1, p2, p3, p4];
// Promise.all(promises)
//   .then(res => console.log(res))
//   .catch(res => {
//     console.log(res);
//   });

// Promise.allSettled(promises).then(res => {
//   console.log(res);
// });

Promise.race(promises).then(res => {
  console.log(res);
});
