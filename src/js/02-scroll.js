import { NewsApi } from './modules/newsApi';
import { renderArticles } from './modules/helpers';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleList: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  targetBox: document.querySelector('.js-box'),
};

const newsApi = new NewsApi();

const options = {
  rootMargin: '500px',
};
let observer = new IntersectionObserver(callback, options);

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;

  newsApi.query = query;
  newsApi.page = 1;

  newsApi.getNews().then(data => {
    refs.articleList.innerHTML = '';
    renderArticles(data.articles, refs);
    observer.observe(refs.targetBox);
    const totalPage = Math.ceil(data.totalResults / newsApi.pageSize);
    const currentPage = newsApi.page;
    setBtnLoadStatus(currentPage, totalPage);
  });
});

function onLoadMore() {
  newsApi.page++;
  newsApi.getNews().then(data => {
    renderArticles(data.articles, refs);

    const totalPage = Math.ceil(data.totalResults / newsApi.pageSize);
    const currentPage = newsApi.page;
    setBtnLoadStatus(currentPage, totalPage);
  });
}

function callback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onLoadMore();
    }
  });
}

function setBtnLoadStatus(currentPage, totalPage) {
  if (currentPage >= totalPage) {
    console.log('unobserve');
    observer.unobserve(refs.targetBox);
  }
}
