// http methods

// GET - отримання даних з сервера

// POST - відправлення даних на сервер
// PUT/PATCH - оновлення існуючих даних на сервері
// DELETE - видалення даних з сервера

// ?page=2&size=10

// params: {
//   page: 2,
//   size: 10,
// }

// json

// ajax; web 1.0 vs web 2.0

// event loop

// setTimeout(() => console.log('1'));
// console.log('2');

// ************ fetch from local json ****************

// fetch('data.json', {
//   method: 'GET',
// });

// так як метод fetch повертає Promise, ми можемо одразу викликати методи .then, .catch, .finally

// const fetchUsersBtn = document.getElementById('fetch-users-btn');

// const renderUsers = (users) => {
//   return users.map((user) => {
//     const div = document.createElement('div');
//     div.innerText = user.name;
//     document.body.appendChild(div);
//   });
// };

// const fetchUsers = () => {
//   fetch('./data.json')
//     .then((response) => response.json())
//     .then((data) => renderUsers(data.users));
// };

// fetchUsersBtn.addEventListener('click', fetchUsers);
// fetchUsersBtn.addEventListener('click', () => fetchUsers());

// ************ fetch from API ****************

const url = 'https://api.instantwebtools.net/v1';

const fetchUsersBtn = document.getElementById('fetch-users-btn');
const loadMoreBtn = document.getElementById('load-more-button');

let page = -1;

const renderUsers = (users) => {
  return users.map((user) => {
    const div = document.createElement('div');
    div.innerText = user._id;
    document.body.appendChild(div);
  });
};

// const fetchUsers = () => {
//   fetch(`${url}/passenger?page=${page}&size=10`)
//     .then((response) => response.json())
//     .then((data) => renderUsers(data.data));
// };

const loadMore = () => {
  page++;

  fetch(`${url}/passenger?page=${page}&size=10`)
    .then((response) => response.json())
    .then((data) => renderUsers(data.data));
};

// fetchUsersBtn.addEventListener('click', fetchUsers);
loadMoreBtn.addEventListener('click', loadMore);

// callbacks

// ******************************************
// promises

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve('done'), 2000);
// });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve('done'), 2000);
//   setTimeout(() => reject(new Error('Whoops!')), 2000);
// });
// console.log(promise);

// promise.then((result) => console.log(result));
// promise.catch((error) => console.log(error));
// promise.finally(() => console.log('finally'));

// console.log(promise);

// ******************************************

// async/await



// ******************************************
// Promise.resolve().then(function () {
//   console.log('1');
// });

// setTimeout(() => console.log('2'));

// Promise.resolve().then(function () {
//   console.log('3');
// });

// console.log('4');
