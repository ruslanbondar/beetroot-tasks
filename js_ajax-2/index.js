const url = 'http://localhost:5001';

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
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

        console.log(item._id);
      }
    });
  });
};

const fetchTodos = async () => {
  fetch(`${url}/todos`)
    .then((res) => res.json())
    .then((data) => renderTodos(data))
    .catch((err) => console.error(err));
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

  await fetchTodos();

  todoInput.value = '';
};

async function updateTodo(id, newMessage) {
  todoList.innerHTML = '';

  await fetch(`${url}/todos?id=${id}`, {
    method: 'PUT',
    body: JSON.stringify({ message: newMessage }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  await fetchTodos();
}

async function removeTodo(id) {
  todoList.innerHTML = '';

  await fetch(`${url}/todos?id=${id}`, {
    method: 'DELETE',
  });

  await fetchTodos();
}

addButton.addEventListener('click', postTodo);
document.addEventListener('DOMContentLoaded', fetchTodos);

const preventRightClick = (event) => {
  event.preventDefault();
};
document.addEventListener('contextmenu', preventRightClick);
