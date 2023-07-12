// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// function func() {
//   console.log(this);
// }

// user.func();

// =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const foo = obj1.func;
// obj1.newFunc2 = foo;
// const newFunc = obj1.newFunc2();
// newFunc();

// =========================================

/* const obj1 = {
  name: 'obj1',
  func() {
    return function () {
      console.log(this);
    };
  },
};

let obj2 = {
  name: 'obj2',
  func() {
    return () => {
      console.log(this);
    };
  },
};

const newFunc2 = obj1.func().bind(obj2);
newFunc2.call(obj1); */
// =========================================
// function foo() {
//   const user1 = {
//     name: 'Roman',
//     setName: newName => {
//       console.log(this);
//     },
//   };
//   const user2 = {
//     name: 'Stepan',
//   };

//   user1.setName();
// }

// const user3 = {
//   name: 'Laura',
// };

// foo.call(user3);

// function foo(obj) {
//   const x = function () {
//     console.log(this);
//   };

//   return x.bind(obj);
// }

// const user2 = {
//   name: 'Stepan',
// };

// const user3 = {
//   name: 'Laura',
// };

// const result = foo(user3);

function foo(arr, callback) {
  // callback.call(user2, 10,20,30,40);
  callback.apply(user1, [10, 20, 30, 40]);
}

function sum(x1, x2, x3) {
  console.log(this, x1 + x2 + x3);
}

const arr = [10, 20, 30];

foo(arr, sum);
