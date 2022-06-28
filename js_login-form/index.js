import { loginData } from './js/data.js';

const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password-input');
const passwordShowButton = document.getElementById('password-show-button');
const passwordHideButton = document.getElementById('password-hide-button');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const userName = formData.get('username');
  const password = formData.get('password');

  if (userName === loginData.username && password === loginData.password) {
    setTimeout(() => alert('You are logged in'), 1000);
  } else setTimeout(() => alert('Username or password is incorrect'), 1000);
});

passwordShowButton.addEventListener('click', () => {
  if (passwordInput.getAttribute('type') === 'password') { // getAttribute('type') - дістаємо значення атрибута type у інпута
    passwordInput.setAttribute('type', 'text'); // setAttribute - змінюємо значення атрибута type на text
    passwordShowButton.style.display = 'none';
    passwordHideButton.style.display = 'block';
  }
});

passwordHideButton.addEventListener('click', () => {
  if (passwordInput.getAttribute('type') === 'text') {
    passwordInput.setAttribute('type', 'password');
    passwordShowButton.style.display = 'block';
    passwordHideButton.style.display = 'none';
  }
});
