import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;

const refs = {
  notification: document.querySelector('.js-alert'),
};

/*
 * Функции
 */

function showNotification() {
  refs.notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('hide');
  refs.notification.classList.remove('is-visible');
}

setTimeout(showNotification, NOTIFICATION_DELAY);
let timeoutId = setTimeout(hideNotification, NOTIFICATION_DELAY * 2);

refs.notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});
