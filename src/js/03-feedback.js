import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInputChange), 500);
refs.form.addEventListener('submit', onFormSubmit);

const { email, message } = refs.form.elements;
const LOCALSTORAGE_KEY = 'feedback-form-state';

localStorageCheck();

function onInputChange(e) {
  const formData = {
    email: email.value,
    message: message.value,
  };

  saveData(formData);
  console.log(localStorage);
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(loadData(LOCALSTORAGE_KEY));

  removeData(LOCALSTORAGE_KEY);

  refs.form.reset();
}

function localStorageCheck() {
  const loadedData = loadData(LOCALSTORAGE_KEY);
  email.value = loadedData.email || '';
  message.value = loadedData.message || '';
}

function saveData(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function loadData(key) {
  try {
    return (data = JSON.parse(localStorage.getItem(key)) || {});
  } catch (error) {
    console.error('Get state error: ', error.message);
    return {};
  }
}

function removeData(key) {
  localStorage.removeItem(key);
}
