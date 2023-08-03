import '../css/common.css';
import { BooksAPI } from './modules/booksAPI';

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  bookList: document.querySelector('.js-articl-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

BooksAPI.getBooks()
  .then(books => {
    renderBooks(books);
  })
  .catch(err => {
    console.log(err.message);
  });
// ======== LISTENERS =============

refs.createForm.addEventListener('submit', onCreateBookSubmit);
refs.updateForm.addEventListener('submit', onUpdateBookSubmit);
refs.resetForm.addEventListener('submit', onResetBookSubmit);
refs.deleteForm.addEventListener('submit', onDeleteBookSubmit);

// ======== CALLBACK =============

async function onCreateBookSubmit(e) {
  e.preventDefault();
  const formElem = e.target.elements;

  const userBook = {
    author: formElem.bookAuthor.value,
    title: formElem.bookTitle.value,
    about: formElem.bookDesc.value,
  };

  try {
    const newBook = await BooksAPI.createBook(userBook);
    const markup = bookTemplate(newBook);
    refs.bookList.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    console.log(err.message);
  }
}

async function onUpdateBookSubmit(e) {
  e.preventDefault();

  const myBook = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();

    if (value) {
      myBook[key] = value;
    }
  });

  try {
    const updatedBook = await BooksAPI.updateBook(myBook);
    const markup = bookTemplate(updatedBook);
    const liTarget = refs.bookList.querySelector(
      `[data-id = "${updatedBook.id}"]`,
    );
    liTarget.insertAdjacentHTML('afterend', markup);
    liTarget.remove();
  } catch {
    console.log('Error! Don`t worry');
  }
}
async function onResetBookSubmit(e) {
  e.preventDefault();

  const myBook = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    myBook[key] = value;
  });

  const updatedBook = await BooksAPI.resetBook(myBook);
  const markup = bookTemplate(updatedBook);
  const liTarget = refs.bookList.querySelector(
    `[data-id = "${updatedBook.id}"]`,
  );
  liTarget.insertAdjacentHTML('afterend', markup);
  liTarget.remove();
}

async function onDeleteBookSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  await BooksAPI.deleteBook(id);
  const liTarget = refs.bookList.querySelector(`[data-id = "${id}"]`);
  liTarget.remove();
}

// ========= HELPERS ===========
function bookTemplate({ id, title, about, author, genre, amount, price }) {
  return `
<li data-id="${id}" class="book">
  <h3 class="book__title">${title}</h3>
  <p class="book__desc">
   ${about}
  </p>

  <div class="book_footer">
    <p class="book_author">${author}</p>
    <span>${genre}</span>
    <span>${amount} - ${price}</span>
    <span> ID = ${id}<span>
  </div>
</li>`;
}
function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}
function renderBooks(books) {
  const markup = booksTemplate(books);
  refs.bookList.innerHTML = markup;
}
