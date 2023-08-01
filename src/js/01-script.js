import { NewsApi } from './modules/newsApi';
import { setBtnLoadStatus, renderArticles } from './modules/helpers';
const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleList: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
};

const newsApi = new NewsApi();

refs.formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  e.target.reset();
  refs.articleList.innerHTML = '';

  newsApi.query = query;
  newsApi.page = 1;
  newsApi.getNews().then(data => {
    setBtnLoadStatus(
      newsApi.page,
      Math.ceil(data.totalResults / newsApi.pageSize),
      refs,
    );

    renderArticles(data.articles, refs);
    refs.btnLoadMore.disabled = false;
  });
}

refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

function onLoadMoreClick() {
  newsApi.page++;
  newsApi.getNews().then(data => {
    setBtnLoadStatus(
      newsApi.page,
      Math.ceil(data.totalResults / newsApi.pageSize),
      refs,
    );
    renderArticles(data.articles, refs);
  });
}
