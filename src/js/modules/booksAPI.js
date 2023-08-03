import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:5000/boks',
  headers: { test: 'Hello World' },
  params: { sort: 'author' },
});
const BASE_URL = 'http://localhost:5000/books';

export class BooksAPI {
  static async getBooks() {
    const res = await fetch(BASE_URL);
    if (res.ok) {
      const result = await res.json();
      return result;
    } else {
      throw new Error('Error get Books');
    }
  }

  static async createBook(newBook) {
    const options = {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(BASE_URL, options);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Error Create Book');
    }
  }

  static async updateBook({ id, ...newBook }) {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(`${BASE_URL}/${id}`, options);
    if (res.ok) {
      const result = await res.json();
      return result;
    } else {
      throw new Error('Error update books');
    }
  }

  static async resetBook({ id, ...newBook }) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(`${BASE_URL}/${id}`, options);
    const result = await res.json();
    console.log(result);
    return result;
  }

  static async deleteBook(id) {
    const options = {
      method: 'DELETE',
    };
    return await fetch(`${BASE_URL}/${id}`, options);
  }
}

export class BooksAPIV2 {
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
