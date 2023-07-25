// ========= JSON  ==============

// JSON.stringify() to JSON
// JSON.parse() from JSON

// const obj = {
//   name: 'Max',
//   age: 20,
//   friends: ['Magno', 'Kiwi'],
// };

// const str = JSON.stringify(obj);
// console.log(str);

// const copyObj = JSON.parse(
//   '{"name":"Max","age":20,"friends":["Magno","Kiwi"]}',
// );
// console.log(copyObj);
// console.log(copyObj === obj);
// '{"name":"Max","age":20,"friends":["Magno","Kiwi"]}'

// const obj = {
//   name: 'Max',
//   age: undefined,
//   friends: [10, undefined, 20],
//   foo() {
//     console.log(123);
//   },
// };

// const jsonObj = JSON.stringify(obj);

// console.log(jsonObj);

// =======================================
// .              LOCAL STORAGE
// =======================================

// localStorage.setItem('test1', 'Hello');
// localStorage.setItem('test2', 100);
// localStorage.setItem('test3', [1, 2, 3, 4, 5]);
// localStorage.setItem('test4', { name: 123 });
// localStorage.setItem('user', JSON.stringify(user));

// const myUser = localStorage.getItem('user');
// const user = JSON.parse(myUser);
// console.log(user);

// localStorage.removeItem('test');

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   console.log(localStorage.getItem(key));
// }

// localStorage.clear();

// =======

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   if (key.includes('user-')) {
//     localStorage.removeItem(key);
//   }
// }

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   const value = localStorage.getItem(key);

//   localStorage.setItem(`user-${key}`, value);
//   localStorage.removeItem(key);
// }

// ================================

// try {
//   const user = {
//     name: undefined,
//   };
//   console.log(user.name);
//   console.log('end');
// } catch (err) {
//   console.log(err);
// }

// console.log('finally');

// ========================================

// try {
//   const userJson = prompt('Enter json');

//   const obj = JSON.parse(userJson);

//   console.log(obj);
// } catch (err) {
//   console.log('Is Not Valid JSON');
// }

// =========================================

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);

  try {
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch {
    console.log('err');
    return data;
  }
}

// saveToLS('test', 'Hello World');

console.log(loadFromLS('hello'));
