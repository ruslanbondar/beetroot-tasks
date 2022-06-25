const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
addButton.addEventListener('click', () => {
  let input = document.getElementById('text-input');
  const listItem = document.createElement('li');
  todoList.appendChild(listItem);
  listItem.innerHTML = input.value;
  input.value = '';
});






















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
