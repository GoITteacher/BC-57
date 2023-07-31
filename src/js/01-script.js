import '../css/common.css';
import { refs } from './modules/refs.js';
import { getQuotes } from './modules/quotesAPI';
import { getSuperhero } from './modules/heroesAPI';
import { getPopularHashtags } from './modules/inst';
// =======================================================

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const hero = e.target.elements.query.value;
  getSuperhero(hero).then(hero => {
    renderHero(hero);
  });
});

function renderHero(hero) {
  const markup = `<div class="card">
    <div class="card-img-top">
      <img src="${hero.images.sm}" alt="${hero.name}" style="width:160px;height:240px">
    </div>
    <div class="card-body">
      <h2 class="card-title">Имя: ${hero.biography.fullName}</h2>
    </div>
  </div>`;
  refs.cardContainer.innerHTML = markup;
}
// =======================================================
refs.form1.addEventListener('submit', e => {
  e.preventDefault();
  const lang = e.target.elements.query.value;
  getQuotes(lang)
    .then(quote => {
      renderQuotes(quote);
    })
    .catch(err => {
      console.log(err);
    });
});

function renderQuotes({ content, originator }) {
  const markup = `
    <div class="card">
    <div class="card-body">
    <p><q>${content}</q> - <h3>${originator.name}</h3></p>
  </div>
</div>`;

  refs.cardContainer1.innerHTML = markup;
}

// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// getPopularHashtags().then(hashtags => {
//   console.log(hashtags.data.row);
// });
