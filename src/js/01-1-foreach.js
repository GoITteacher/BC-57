const array = [10, 20, 30, 4, 5, 1, 2, 4, 7, 8, 20];

/*
function myFoo(elem, index) {
  console.log(index, elem);
}
array.forEach(myFoo);
*/

array.forEach((elem, index, array) => {
  console.log(`${index + 1}. ${elem}`);
});

array.forEach(function (elem, index, array) {
  // ....
});

// myFoo('Hello', 0);
// myFoo('World', 1);
// myFoo(100, 2, ...)
// myFoo(true, 3, ...)

// =============
