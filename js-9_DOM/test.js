// const playList = [
//   {
//     author: 'LED ZEPPELIN',
//     song: 'STAIRWAY TO HEAVEN',
//   },
//   {
//     author: 'QUEEN',
//     song: 'BOHEMIAN RHAPSODY',
//   },
//   {
//     author: 'LYNYRD SKYNYRD',
//     song: 'FREE BIRD',
//   },
//   {
//     author: 'DEEP PURPLE',
//     song: 'SMOKE ON THE WATER',
//   },
//   {
//     author: 'JIMI HENDRIX',
//     song: 'ALL ALONG THE WATCHTOWER',
//   },
//   {
//     author: 'AC/DC',
//     song: 'BACK IN BLACK',
//   },
//   {
//     author: 'QUEEN',
//     song: 'WE WILL ROCK YOU',
//   },
//   {
//     author: 'METALLICA',
//     song: 'ENTER SANDMAN',
//   },
// ];

// const list = document.getElementById('list');

// playList.map((item) => {
//   const listItem = document.createElement('li');
//   listItem.innerHTML = `${item.author} - ${item.song}`;
//   list.appendChild(listItem);
// });

// *******************************

const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');

openButton.addEventListener('click', () => {
  modal.classList.add('my-modal-show');
});
closeButton.addEventListener('click', () => {
  modal.classList.remove('my-modal-show');
});

document.addEventListener('mousedown', (event) => {
  if (!modal.contains(event.target)) {
    modal.classList.remove('my-modal-show');
  }
});

// *******************************

// const redLight = document.getElementById('red-light');
// const yellowLight = document.getElementById('yellow-light');
// const greenLight = document.getElementById('green-light');
// const lightButton = document.getElementById('light-button');
// const warning = document.getElementById('warning');

// let counter = 0;
// lightButton.addEventListener('click', () => {
//   counter = counter + 1;

//   if (counter === 1) {
//     redLight.classList.remove('red');
//     yellowLight.classList.add('yellow');
//     warning.innerHTML = 'Wait!!!';
//   }

//   if (counter === 2) {
//     yellowLight.classList.remove('yellow');
//     greenLight.classList.add('green');
//     warning.innerHTML = 'Go!!!';
//   }

//   if (counter === 3) {
//     greenLight.classList.remove('green');
//     redLight.classList.add('red');
//     warning.innerHTML = 'Stop!!!';
//     counter = 0;
//   }
// });
