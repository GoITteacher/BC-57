/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const myPromise = new Promise(() => {
//   const rand = Math.random();

//   setTimeout(() => {
//     if (rand > 0.5) {
//       resolve(rand);
//     } else {
//       reject(rand);
//     }
//   }, 2000);
// });

// myPromise.then(onFulfilled, onRejected);

// myPromise.then(onFulfilled).catch(onRejected);
// myPromise.then(() => {
//   console.log('Ok');
// });
// promise.then(onFulfilled, onRejected);

// promise.then(onFulfilled).catch(onRejected);

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

const myPromise = new Promise((resolve, reject) => {
  resolve(10);
});

myPromise
  .then(result1 => {
    console.log(result1);
    throw new Error('MY ERROR1');
    return result1 * 2;
  })
  .then(result => {
    console.log(result);
    // throw new Error('MY ERROR2');
    return result / 4;
  })
  .then(result1 => {
    console.log(result1);
    // throw new Error('MY ERROR3');
    return `${result1}`;
  })
  .then(result1 => {
    console.log('telegram');
    // throw new Error('MY ERROR4');
    console.log(result1);
  })
  .catch(result1 => {
    console.log('Err');
    console.log(result1);
    console.log('telegram');
    return 'HELLO ERROR';
  })
  .finally(() => {
    console.log('Telegram');
  });
