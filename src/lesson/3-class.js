/* //Класи
/* 
  - Оголошення класу
  - Конструктор класу
  - Об'єкт параметрів
  - Методи класу
  - Приватні властивості (Інкапсуляція)
  - Геттери і сеттери
  - Статичні властивості
  - Статичні методи
  - Наслідування класів
  - Конструктор дочірнього класу
  - Методи дочірнього класу

*/

/* class User {
  isStudent = false;
  money = 0;
  work;

  constructor({
    name = 'Default',
    age = 'Default',
    phoneNumber = '',
    location = {},
  }) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.location = location;
  }

  showInfo(x1, x2) {
    console.log(this.name);
    console.log(this.age);
    console.log(this.phoneNumber);
    return '123';
  }

  showName() {
    console.log(this.name);
  }

  setName(newName) {
    this.name = newName;
  }
}

const user1 = new User({ age: 25 });
const user2 = new User({ phoneNumber: '345345' });

user1.setName('Robin');

console.log(user1);
console.log(user2);

user1.showInfo(); */

// ===========================

// class User {
//   static counter = 0;

//   #myNumber;
//   firstname;
//   lastname;
//   #age = 0;

//   constructor(firstname, lastname, age, myNumber) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.#myNumber = myNumber;
//     if (age > 0) this.#age = age;
//     User.counter++;
//   }

//   showInfo() {
//     console.log('----------------');
//     this.#showName();
//     this.#showAge();
//     console.log('----------------');
//   }

//   #showName() {
//     console.log(`Name - ${this.name}`);
//   }

//   #showAge() {
//     console.log(`Age - ${this.#age}`);
//   }

//   get name() {
//     return `${this.firstname} ${this.lastname}`;
//   }

//   get number() {
//     console.log('MyNumber - ', this.#myNumber);
//   }

//   get age() {
//     this.counter++;
//     return this.#age;
//   }

//   set age(x) {
//     if (x > 0 && x < 100) {
//       this.#age = x;
//       console.log('OK');
//     } else console.log('Error age');
//   }

//   static getCountUser() {
//     console.log(this);
//     console.log(`User counter = ${User.counter}`);
//   }
// }

// const user1 = new User('Max', 'FUN', 50, 22);
// const user2 = new User('Max', 'FUN', 50, 22);
// const user3 = new User('Max', 'FUN', 50, 22);
// const user4 = new User('Max', 'FUN', 50, 22);
// const user5 = new User('Max', 'FUN', 50, 22);

// User.getCountUser();

// console.log(User.counter);

// const string = new String();
// console.log(string);
// const obj = new Object();
// const arr1 = [];
// const arr2 = new Array();
// console.log(arr1, arr2);
// user1.age;
// user1.age;
// user1.age;
// user1.age;
// user1.age;

// user1.age = 123;
// user1.age = 25;
// user1.showInfo();

// user1.setAge(10);
// const userAge = user1.getAge();

// user1.name = 'newName';
// const userName = user1.name;

// class User {
//   #name;
//   count;
//   constructor(name) {
//     this.#name = name;
//   }
//   get name() {
//     console.log(this.#name);
//   }

//   set name(newName) {
//     this.#name = newName;
//   }
// }

// const user1 = new User('123');
// const user2 = new User('234');

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// const options = {
//   speed: '80',
//   model: 'awdaw',
//   price: 10000000,
//   type: 'sport',
// };

// =======================================

class Animal {
  name;
  paw;
  eyes;
  constructor(name, paw, eyes) {
    console.log('CREATE ANIMAL');
    this.eyes = eyes;
    this.name = name;
    this.paw = paw;
  }
}

class Dog extends Animal {
  constructor() {
    super('Snoopy', 4, 2);
    this.type = 'Dog';
  }
  sayWoof() {}
}

class Cat extends Animal {
  constructor() {
    super('Garfild', 4, 2);
    this.type = 'Cat';
  }
  sayMeow() {}
}

class Spider extends Animal {
  constructor() {
    super('Bogdan', 8, 16);
    this.type = 'Spider';
  }
  sayOooo() {}
}

const dog = new Dog();
const cat = new Cat();
const spider = new Spider();

console.log(dog);
console.log(cat);
console.log(spider);
// =======================

class User {
  firstname;
  lastname;
  age;
  phoneNumber;
  #test;
  showUserInfo() {
    console.log(this.firstname);
    console.log(this.lastname);
  }
}

class Student extends User {
  group;
  course;
  friends;

  constructor() {
    super();
    console.log(this.firstname);
  }
}

class Teacher extends User {
  cafedra;
  id;
}

const student = new Student();
const teacher = new Teacher();

console.log(student);
console.log(teacher);
