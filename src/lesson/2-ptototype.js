//Прототипне наслідування

// Object;

const a = {
  test: 'hello',
  x: 10,
  y: 20,
};

const b = Object.create(a);
b.test1 = 'Hello1';

const q = Object.create(b);
q.test2 = 'Hello2';

const t = Object.create(q);
t.test3 = 'Hello3';

// const b = {
//   __proto__: a,
// };

const arr = [12, 23, 3542];

arr.concat();
console.log(arr);
