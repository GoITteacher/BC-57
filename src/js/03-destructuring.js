/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const user = {
//   name: 'Volodka',
//   age: 23,
//   phoneNumber: '092343123124',
//   isStudent: false,
//   isTeacher: true,
// };
// const { name, age, phoneNumber, isStudent, isTeacher } = user;
// const age = user.age;
// const name = user.name;
// const phoneNumber = user.phoneNumber;
// const isStudent = user.isStudent;
// const isTeacher = user.isTeacher;

// const x = 'test';

/* const obj = {
  a: 10,
  b: 20,
  x: 'HELLO WORLD',
  y: undefined,
};
 */

// const { a, b, x, c = 'TEST', y: myY = 12312 } = obj;
// console.log(a, b, c, myY);
// let { a, b } = obj;
// console.log(a);

// const { x: myX, a: myA, b: myB } = obj;

// let myA = obj.a;
// let myB = obj.b;
// let myX = obj.x;
// console.log(myX, myB, myA);
/*
 * Глубокая деструктуризация
 */

/* const user = {
  name: 'Pavlo',
  location: {
    lot: 0.64234,
    lon: 0.23423,
    position: {
      x: 10,
      y: 20,
    },
  },
};
 */
/* const {
  name,
  location: {
    lot,
    lon,
    position: { x: posX },
  },
} = user;
console.log(name, lot, lon, posX); */

// const name = user.name;
// const {lot, lon} = user.location;

/*
 * Деструктуризация массивов
 */

// const arr = [1, 2, 3, 45, 6, 67, 7, 6, 53];
// console.log(arr);
// const [x1, x2, x3, , , x4, , , x5] = arr;
// console.log(x1, x2, x3, x4, x5);

/* const rgb = [255, 255, 255];
const myX = rgb[100];
const [r, g, b] = rgb;
const { myX: xxx } = rgb;
console.log(xxx); */

/*
 * Операция rest (сбор)
 */

// const arr = [1, 2, 3, 4, 5, 6, 6, 7, 2, 1, 23, 5, 6];
// const [x1, x2, , x3, ...props] = arr;
// console.log(x1, x2, x3, props);

// const obj = {
//   a: 1,
//   b: 1,
//   c: 1,
//   d: 1,
//   e: 1,
// };
// const { a, b,c,d,y, ...props1 } = obj;
// console.log(a, b, props1);

// const book = {
//   id: 23123,
//   author: 'efefsef',
//   title: '123234',
//   countPage: 123234,
// };

// function foo({ id, ...book }) {
//   console.log(id, book);
// }
// foo(book);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

/* function foo({ name = 'DEFAULT', age = 'DEFAULT', ...props }) {
  console.log(name, age, props);
}
const options = {
  age1: 2323,
  phoneNumber: null,
  isStudent: false,
  isTeacher: false,
  location: null,
  country: 'Ukraine',
  city: 'Kyiv',
};
foo(options);
function foo1(name='DE', age="def", phoneNumber, isStudent, isTeacher) {}
foo1(undefined, undefined, undefined, true,false); */

/* function foo(x1) {
  console.log(name, age, props.isTeacher);
  const { isStudent, isTeacher } = props;
}

const user = {
  isStudent: false,
  isTeacher: false,
  name: 'Max',
  age: 21,
};

foo(user); */

/* function foo({ name1, age1 }, { name2, age2 }) {
  console.log(name1, name2);
  console.log(age1, age2);
}

const user1 = {
  name1: '123123',
  age1: 123,
};
const user2 = {
  name2: '234234',
  age2: 234,
};

foo(user1, user2); */

// =================================

/* let x = 10;
let y = 20;
console.log(x, y);
[y, x] = [x, y];
console.log(x, y); */
