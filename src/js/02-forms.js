/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formElem = document.querySelector('.js-register-form');

formElem.addEventListener('submit', onFormSubmit);

/* function onFormSubmit(evt) {
  evt.preventDefault();

  //   const input1 = formElem.querySelector('[name="email1"]');
  //   const input2 = formElem.querySelector('[name="email2"]');
  //   const input3 = formElem.querySelector('[name="email3"]');

  //   console.log('Email1: ', formElem.elements.email1.value);
  //   console.log('Email2: ', formElem.elements.email2.value);
  //   console.log('Email3: ', formElem.elements.email3.value);
  //   console.log('Sub: ', formElem.elements.subscription.value);

  const email1 = evt.target.elements.email1.value;
  const email2 = evt.target.elements.email2.value;
  const email3 = evt.target.elements.email3.value;
  const password = evt.target.elements.password.value;
  const subscription = evt.target.elements.subscription.value;

  const userData = {
    email1,
    email2,
    email3,
    password,
    subscription,
  };

  console.log(userData);
} */

/* function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = {};

  formData.forEach((el, key) => {
    data[key] = el;
  });

  console.log(data);
}
 */
