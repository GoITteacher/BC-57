export function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadFromLS(key) {
  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}
