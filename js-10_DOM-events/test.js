// Task 1
// const readBlock = document.getElementById('read-block');
// const writeBlock = document.getElementById('write-block');

// let keys = {
//   ctrl: false,
//   e: false,
//   plus: false,
// };

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Control') {
//     keys.ctrl = true;
//   }
//   if (event.key === 'e') {
//     keys.e = true;
//   }
//   if (event.key === '=' || event.key === '+') {
//     keys.plus = true;
//   }

//   if (keys.ctrl && keys.e) {
//     readBlock.style.display = 'none';
//     writeBlock.style.display = 'block';
//   }
//   if (keys.ctrl && keys.plus) {
//     readBlock.innerHTML = writeBlock.value;
//     readBlock.style.display = 'block';
//     writeBlock.style.display = 'none';
//   }
// });

// document.addEventListener('keyup', (event) => {
//   if (event.key === 'Control') {
//     keys.ctrl = false;
//   }
//   if (event.key === 'e') {
//     keys.e = false;
//   }
//   if (event.key === '=' || event.key === '+') {
//     keys.plus = false;
//   }
// });

// Task 2

// const data = [
//   [3, 6, 1, 9, 23, 2],
//   [5, 23, 45, 7, 1, 8, 3],
//   [76, 34, 23, 8, 20],
//   [76, 34, 23, 8, 20],
// ];

// const tableContainer = document.getElementById('table-container');

// const sortArr = (arr) => {
//   return arr.sort((a, b) => a - b);
// };

// data.map((item, index) => {
//   const button = document.createElement('button');
//   button.classList.add('table-button');
//   button.innerHTML = `Sort column ${index + 1}`;

//   const column = document.createElement('div');
//   column.classList.add('table-column');
//   column.appendChild(button);

//   tableContainer.appendChild(column);

//   const numberArr = item.map((numberItem) => {
//     const row = document.createElement('div');
//     row.classList.add('table-row');
//     column.appendChild(row);
//     row.innerHTML = numberItem;
//     return numberItem;
//   });

//   button.addEventListener('click', () => {
//     column.innerHTML = '';
//     column.appendChild(button);

//     sortArr(numberArr).map((numberItem) => {
//       const row = document.createElement('div');
//       row.classList.add('table-row');
//       column.appendChild(row);
//       row.innerHTML = numberItem;
//     });
//   });
// });

// Task 3
