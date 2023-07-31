class User {
  #name = 'Default';
  #age = 123;
  constructor(x, y) {
    this.#name = x;
  }
  showName() {
    console.log(this.#name);
  }

  getName() {
    return this.#name;
  }

  get name() {
    return this.#name;
  }

  // ===========

  getAge() {}

  setAge() {}

  // ========

  get age() {
    return this.#age;
  }
}

// const user1 = new User(10);
// const user2 = new User('Hello');
// const user3 = new User('World');
// const user4 = new User('123');

// console.log(user1.name);

// console.log(user1.getName());
// console.log(user1.name);
// user1.name

// user1.age = 23;

// console.log(user1.age);
