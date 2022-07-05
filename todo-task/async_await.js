const url = 'http://localhost:5001';

const fetchTodos = async () => {
  try {
    const promise = await fetch(`${url}/todos`);
    const data = await promise.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchTodos();
