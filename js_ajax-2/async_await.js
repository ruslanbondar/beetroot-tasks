const url = 'http://localhost:5001';

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

const fetchTodos = async () => {
  try {
    const response = await fetch(`${url}/todo`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const test = async () => {
  return 5;
};

console.log(test());

document.addEventListener('DOMContentLoaded', fetchTodos);
