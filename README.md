# ПЛАН

1. Kahoot
1. Pagination
1. Postman
1. FETCH and [AXIOS](https://github.com/axios/axios)

```html
<li class="card news-card">
  <div class="news-image">
    <img
      src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000"
      alt=""
    />
  </div>

  <h3 class="card-title">Title</h3>
  <p class="card-desc">summary</p>
  <div class="card-footer">
    <span>Author</span>
    <span>Date</span>
  </div>
</li>
```

```js
function getTodos(page = 1, limit = 10) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/users?';

  const PARAMS = new URLSearchParams({
    _page: page,
    _limit: limit,
  });

  const url = BASE_URL + END_POINT + PARAMS;

  fetch(url)
    .then(res => res.json())
    .then(todos => {
      console.log(todos);
    });
}

getTodos(1, 20);
```
