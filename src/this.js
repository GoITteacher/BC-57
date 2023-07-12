/* 
Контекст виконання функції
*/

// function showName() {
//   this.name = this.name.toUpperCase();
//   console.log(this.name);
// }

// const obj1 = {
//   name: 'Max',
//   car1: showName,
// };

// const obj2 = {
//   name: 'Roman',
//   car1: showName,
// };

// showName();
/* 
Правила визначення this
    - this у глобальній області видимості
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/

/* function foo() {
  console.log(this);
}
foo(); */ //undefined || window

/* const obj = {
  name: 'test',
  age: 123,
  phoneNumber: '123123',
  showThis() {
    console.log(this.age);
  },
};

obj.showThis();

const obj2 = {
  name: 'test2',
  age: 123,
  phoneNumber: '123123',
  showThis() {
    console.log(this);
  },
};

obj2.showThis(); */

/* function foo(callback) {
  const obj = {
    name: 'hello',
    test: callback,
  };
  obj.test();
}

function showThis() {
  console.log(this);
}

foo(showThis); */

/* function foo() {
  // this = undefined
  const arrow = () => {
    console.log(this);
  };
  arrow();
}

foo(); */

// const arrow = () => {
//   console.log(this);
// };

// arrow();

/* 
1. Який тип функції

- якщо стрілчата, дивимось момент створення 
дивимось батьківський контектс

- якщо звичайна, дивимось момент виклику
*/

// const foo = () => {
//   console.log(this);
// };

// const obj = {
//   showName: foo,
// };

// const obj2 = {
//   test: obj.showName,
// };

// obj2.test();

//- this у callback функціях

//- this у стрілочних функціях

/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

// const obj1 = {
//   name: 'Max',
//   setName(newName) {
//     this.name = newName;
//     // console.log(this);
//   },
// };

// const obj2 = {
//   name: 'Roman',
// };

// obj1.setName('Stepan');
// const arr = [1,2,3,4,5,6,7]
// obj1.setName.call(obj2, ...[1,2,3,4,4,5,6,7] );
// obj1.setName.apply(obj2, ['Vasya', 1, 2, 3, 4, 5, 6]);

// console.log(obj1);
// console.log(obj2);
// ===============================
/* 
function foo(x, y) {
  this.name = x;
  this.age = y;
}
const user = {
  name: 'Hello',
  age: 234,
};
const copy = foo.bind(user);

const obj = {
  name: 'Test',
  age: 20,
  newProps: copy,
};

obj.newProps('Valera', 18);

console.log(obj);

copy('new Name', 0);
console.log(user);
*/

// ===============================

// 1. arrow
// 2. bind
// 3. call && apply
// 4. object
// 5. global || undefined
