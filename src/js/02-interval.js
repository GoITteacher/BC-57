import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

// let counter = 0;

// function myFun() {
//   counter += 1;
//   console.log(counter);
// }

// setInterval(myFun, 1000);

/*
 * Очистка интервала с clearInterval(intervalId)
 */

let counter = 0;

let idInterval = setInterval(myFun, 1000); //6

function myFun() {
  counter += 1;
  console.log(counter);

  if (counter === 5) {
    console.log('clear');
    clearInterval(idInterval);
  }
}
