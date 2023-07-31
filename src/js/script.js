const refs = {
  myListElem: document.querySelector('.js-list'),
  formElem: document.querySelector('.js-form'),
};
function getTodosByUser(id) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/todos';
  const PARAMS = `?userId=${id}`;
  const url = BASE_URL + END_POINT + PARAMS;
  return fetch(url).then(res => res.json());
}

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const userId = e.target.elements.userId.value;
  getTodosByUser(userId).then(todos => {
    render(todos);
  });
});

function render(data) {
  const markup = data
    .map(todo => {
      return `<li>${todo.title}</li>`;
    })
    .join('');
  refs.myListElem.innerHTML = markup;
}
