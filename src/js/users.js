import '../css/common.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getRandomPost1() {
  const promises = [];
  for (let i = 1; i < 100; i++) {
    const promise = fetch(`${BASE_URL}/todos/${i}`).then(res => res.json());
    promises.push(promise);
  }

  const result = await Promise.all(promises);
  console.log(result);
}

function getRandomPost2() {
  for (let i = 1; i < 100; i++) {
    fetch(`${BASE_URL}/todos/${i}`)
      .then(res => res.json())
      .then(todo => {
        console.log(todo);
      });
  }
}

// getRandomPost1();

async function foo() {
  const todo1 = fetch(`${BASE_URL}/todos/1`);
  const todo2 = fetch(`${BASE_URL}/todos/2`);
  const todo3 = fetch(`${BASE_URL}/todos/3`);

  const result = await Promise.allSettled([todo1, todo2, todo3]);
  console.log(result);
}

foo();
