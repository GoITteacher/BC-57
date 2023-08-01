const BASE_URL = 'https://newsapi.org/v2';
const END_POINT = '/everything?';

export class NewsApi {
  query = '';
  page = 1;
  pageSize = 20;

  getNews() {
    const PARAMS = new URLSearchParams({
      q: this.query,
      sortBy: 'popularity',
      pageSize: this.pageSize,
      page: this.page,
    });

    const options = {
      headers: {
        'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
      },
    };

    const url = BASE_URL + END_POINT + PARAMS;
    return fetch(url, options).then(res => res.json());
  }
}
