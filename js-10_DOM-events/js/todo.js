const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-items');
const undoneList = document.getElementById('undone-items');
let input = document.getElementById('text-input');

const addTodo = () => {
  if (input.value) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    todoList.appendChild(listItem);
    listItem.innerHTML = input.value;

    input.value = '';

    listItem.addEventListener('mousedown', (event) => {
      if (event.button === 2) {
        listItem.remove();
        doneList.appendChild(listItem);
      }
    });

    listItem.addEventListener('dblclick', () => {
      listItem.remove();
      undoneList.appendChild(listItem);
    });
  } else alert('You need to provide a value');
};

export { addTodo };
