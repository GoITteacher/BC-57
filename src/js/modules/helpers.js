export function setBtnLoadStatus(currentPage, totalPage, refs) {
  if (currentPage >= totalPage) {
    refs.btnLoadMore.disabled = true;
  }
}

export function renderArticles(articles, refs) {
  const markup = articles
    .filter(({ urlToImage }) => urlToImage)
    .map(articleMarkup)
    .join('');
  refs.articleList.insertAdjacentHTML('beforeend', markup);
}

function articleMarkup({
  author,
  publishedAt,
  title,
  description,
  urlToImage,
}) {
  return `<li class="card news-card">
      <div class="news-image">
        <img
          src="${urlToImage}"
          alt="${title}"
        />
      </div>
  
      <h3 class="card-title">${title}</h3>
      <p class="card-desc">${description}</p>
      <div class="card-footer">
        <span>${author}</span>
        <span>${publishedAt}</span>
      </div>
    </li>`;
}
