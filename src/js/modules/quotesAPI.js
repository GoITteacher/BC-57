import { refs } from './refs';

export function getQuotes(lang) {
  const BASE_URL = 'https://quotes15.p.rapidapi.com';
  const END_POINT = '/quotes/random/';
  const PARAMS = `?language_code=${lang}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      // return Promise.reject();
      throw new Error('Error');
    }
  });
}
