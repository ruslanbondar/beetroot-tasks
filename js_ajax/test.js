const usersButton = document.getElementById('fetch-users-button');
const usersWrapper = document.getElementById('users-wrapper');

const renderUsers = (users) => {
  return users.map((user) => {
    const userDiv = document.createElement('div');
    userDiv.innerText = user.name;
    usersWrapper.appendChild(userDiv);
  });
};

const fetchUsers = () =>
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => renderUsers(data.users));

usersButton.addEventListener('click', fetchUsers);

const url = 'https://jsonplaceholder.typicode.com';
const postsButton = document.getElementById('fetch-posts-button');
const postsWrapper = document.getElementById('posts-wrapper');

const renderPosts = (posts) => {
  return posts.map((post) => {
    const postDiv = document.createElement('div');
    postDiv.innerText = post.title;
    postsWrapper.appendChild(postDiv);
  });
};

const fetchPosts = () =>
  fetch(`${url}/posts`)
    .then((response) => response.json())
    .then((data) => renderPosts(data));

postsButton.addEventListener('click', fetchPosts);

// *****************************************

// function reqListener() {
//   console.log(this.responseText);
// }

// const oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', './data.json');
// oReq.send();

// function loadJSON(callback) {
//   const xobj = new XMLHttpRequest();
//   xobj.open('GET', './data.json', true);
//   xobj.onreadystatechange = function () {
//     if (xobj.readyState == 4 && xobj.status == '200') {
//       callback(xobj.responseText);
//     }
//   };
//   xobj.send(null);
// }

// function init() {
//   loadJSON(function (response) {
//     const actual_JSON = JSON.parse(response);
//     renderUsers(actual_JSON.users)
//   });
// }

// init();

// *****************************************




// const url = 'https://api.instantwebtools.net/v1';
// const nextButton = document.getElementById('next-button');
// let currentPage = 0;

// const renderPassengers = (passengers) => {
//   return passengers.map((passenger) => {
//     const div = document.createElement('div');
//     div.innerText = passenger._id;
//     document.body.appendChild(div);
//   });
// };

// const fetchPassengers = () => {
//   fetch(`${url}/passenger?page=${currentPage}&size=10`)
//     .then((response) => response.json())
//     .then((data) => renderPassengers(data.data));
// };

// fetchPassengers();

// nextButton.addEventListener('click', () => {
//   currentPage++;
//   fetchPassengers();
// });
