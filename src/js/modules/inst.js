export function getPopularHashtags() {
  const BASE_URL = 'https://top-instagram-hashtag.p.rapidapi.com';
  const END_POINT = '/hashtags';
  const url = BASE_URL + END_POINT;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'top-instagram-hashtag.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
