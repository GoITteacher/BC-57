import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:5000/books',
  headers: { test: 'Hello World' },
  params: { sort: 'author' },
});

export class BooksAPIV2 {
  static getBooks() {
    return fetch(BASE_URL).then(res => res.json());
  }

  static createBook(newBook) {
    const options = {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(BASE_URL, options).then(res => res.json());
  }

  static updateBook({ id, ...newBook }) {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
  }

  static resetBook({ id, ...newBook }) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json());
  }
  static deleteBook(id) {
    const options = {
      method: 'DELETE',
    };
    return fetch(`${BASE_URL}/${id}`, options);
  }
}

export class BooksAPI {
  static getBooks() {
    return axios2.get().then(res => {
      console.log(res);
      return res.data;
    });
  }
  static createBook(newBook) {
    return axios2.post('', newBook).then(res => res.data);
  }
  static updateBook({ id, ...newBook }) {
    return axios2.patch(`/${id}`, newBook).then(res => res.data);
  }
  static resetBook({ id, ...newBook }) {
    return axios2.put(`/${id}`, newBook).then(res => res.data);
  }
  static deleteBook(id) {
    return axios2.delete(`/${id}`);
  }
}
