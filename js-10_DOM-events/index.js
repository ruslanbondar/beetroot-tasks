import { addTodo } from './js/todo.js';

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addTodo);

const preventRightClick = (event) => {
  event.preventDefault();
};
document.addEventListener('contextmenu', preventRightClick);

// const form = document.getElementById('my-form');
// const todoList = document.getElementById('todo-list');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   let input = document.getElementById('text-input');
//   const listItem = document.createElement('li');
//   todoList.appendChild(listItem);
//   listItem.innerHTML = input.value;
//   form.reset();
// });

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const input = document.getElementById('text-input');
//   const li = document.createElement('li');
//   const label = document.createElement('label');
//   const checkbox = document.createElement('input');
//   checkbox.setAttribute('type', 'checkbox');
//   const span = document.createElement('span');

//   label.appendChild(checkbox);
//   label.appendChild(span);

//   li.appendChild(label);
//   todoList.appendChild(li);
//   span.innerHTML = input.value;

//   form.reset();
// });

const timerButton = document.getElementById('timer-button');

timerButton.addEventListener('click', () => {
  // setTimeout(callback, timer);
  setTimeout(() => console.log('click'), 3000);
});

// const counterText = document.getElementById('counter');
// let counter = 0;
// setInterval(() => (counterText.innerText = counter++), 1000);
