const profiles = [
  { name: 'Max', age: 20, isStudent: true },
  { name: 'Roman', age: 21, isStudent: true },
  { name: 'Pavlo', age: 23, isStudent: true },
  { name: 'Stepan', age: 24, isStudent: true },
  { name: 'Poly', age: 25, isStudent: true },
];

function markup(profiles) {
  let result = '';
  for (let { name, age, isStudent } of profiles) {
    result += `<li>Name:${name}\nAge:${age}\nStudent:${isStudent}</li>`;
  }

  document.body.innerHTML = result;
}

markup(profiles);

// ('Name: ...., Age: ... , Student: true');
/* function foo(profiles) {
  for (let { name, age, isStudent } of profiles) {
    console.log(`${name} ${age} ${isStudent}`);
  }
}
foo(profiles); */

/* const obj = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
};

for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
} */
