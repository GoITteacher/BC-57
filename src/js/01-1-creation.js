/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

/* const user = {
  f: 'TEST',
  name: 'Max',
  age: 25,
};

console.log(user);
 */

/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

/* const user = {
  'location.position': '123234',
  name: 'test',
  age: 23,
  phoneNumber: '23445123',
  isStudent: false,
  location: {
    country: 'Ukraine',
    city: 'Dnipro',
    street: 'TEST',
    position: {
      x: 0.23434512423,
      y: 0.62343412323,
    },
  },
};
 */
// console.log(user.location.position.x);
// console.log(user.location);

// const myKey = 'location';
// console.log(user[myKey].position['x']);

// user.age = 18;
// user['name'] = 'TEST';
// user.location.position.x = 2;

// user.education = null;
// user.location.position.z = 50;
// console.log(user);

// ============================

// const name = 'Max';
// const age = 12;
// const phoneNumber = '1243234234234';
// const x = 'HELLO';
// const y = 'WORLD';

// const obj = {
//   phoneNumber,

//   name,
//   age,
//   [123]: 'hello1',
//   [true]: 'hello2',
//   [false]: 'hello3',
//   [x + y]: 'hello4',
//   [10 / 2 + 20 / 5]: 'hello4',
// };

// console.log(obj);

// ======================
function foo(x, y) {
  console.log('HELLO', x, y);
  return x + y;
}

const user1 = {
  name: 'Stepan',
  sayHello: foo,
};

const user2 = {
  name: 'Stepan',
  age: 12,
  sayHello() {
    console.log(this.name);
  },
};
const user3 = {
  name: 'Max',
  age: 12,
  sayHello() {
    console.log(this.name);
  },
};

user2.sayHello();
user3.sayHello();

/*
 * Ссылочный тип {} === {}
 */

/*
 * Массивы и функции это объекты
 */
