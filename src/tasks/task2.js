let user1 = {
  name: 'Petya',
  setName(name) {
    console.log('SET_NAME', name);
    this.name = name;
  },
};

let user2 = {
  name: '1231',
  age: 'TEST',
};

let newName = user1.setName.bind(user2);

// newName('name1');
newName('1231');

console.log(user1);
console.log(user2);
