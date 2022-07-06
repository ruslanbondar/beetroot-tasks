const url = 'https://beetroot-todo-app.herokuapp.com';

const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const renderTodos = (list) => {
  list.map((item) => {
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerText = item.message;
    li.appendChild(span);
    todoList.appendChild(li);

    li.addEventListener('dblclick', () => removeTodo(item._id));

    li.addEventListener('mousedown', (event) => {
      if (event.button === 2) {
        span.style.display = 'none';

        const editInput = document.createElement('input');
        editInput.value = span.innerText;
        const button = document.createElement('button');
        button.innerText = 'Save';

        li.appendChild(editInput);
        li.appendChild(button);

        button.addEventListener('click', () =>
          updateTodo(item._id, editInput.value),
        );
      }
    });
  });
};

const fetchTodos = () => {
  fetch(`${url}/todos`)
    .then((response) => response.json())
    .then((data) => renderTodos(data))
    .catch((error) => console.error(error));
};

const postTodo = async () => {
  todoList.innerHTML = '';

  await fetch(`${url}/todos`, {
    method: 'POST',
    body: JSON.stringify({ message: todoInput.value }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  fetchTodos();

  todoInput.value = '';
};

async function updateTodo(id, message) {
  todoList.innerHTML = '';

  await fetch(`${url}/todos?id=${id}`, {
    method: 'PUT',
    body: JSON.stringify({ message }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  fetchTodos();
}

async function removeTodo(id) {
  todoList.innerHTML = '';

  await fetch(`${url}/todos?id=${id}`, {
    method: 'DELETE',
  });

  fetchTodos();
}

document.addEventListener('DOMContentLoaded', fetchTodos);
addButton.addEventListener('click', postTodo);

const preventRightClick = (event) => {
  event.preventDefault();
};
document.addEventListener('contextmenu', preventRightClick);
