let list = [
  { label: 'Html' },
  { label: 'Css' },
  { label: 'JavaScript' },
  { label: 'Redux' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'C++' },
  { label: 'C#' },
  { label: 'NodeJs' },
];

let filterElem = document.querySelector('.js-filter');
let listElem = document.querySelector('.js-list');

function renderList(array) {
  const markup = array
    .map(el => {
      return `<li>${el.label}</li>`;
    })
    .join('');

  listElem.innerHTML = markup;
}

renderList(list);

filterElem.addEventListener(
  'input',
  _.debounce(onFilterChange, 1000, {
    leading: false,
    trailing: true,
    maxWait: 5000,
  }),
);

function onFilterChange(e) {
  const userValue = e.target.value.toLowerCase();
  const filteredList = list.filter(({ label }) =>
    label.toLowerCase().includes(userValue),
  );

  renderList(filteredList);
}

// =================================

const formElem = document.querySelector('.js-form');
const copyOnFormSubmit = _.throttle(onFormSubmit, 1000);

formElem.addEventListener('submit', e => {
  e.preventDefault();
  copyOnFormSubmit(e);
});

function onFormSubmit(e) {
  console.log(e.target.elements.myElem.value);
}

// ================
