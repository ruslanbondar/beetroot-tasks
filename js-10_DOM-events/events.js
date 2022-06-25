const btn = document.getElementById('btn');

// btn.onclick = console.log('click'); // 1

// btn.onclick = function () { // 1
//   console.log('click');
// };

// btn.onclick = () => console.log('click'); // 2

// function clickHandler() {
//   console.log('click');
// }

// btn.onclick = clickHandler; // 3

// btn.onclick = () => clickHandler(); // 3

// btn.addEventListener('click', () => console.log('click')); // 4

// const myDiv = document.getElementById('my-div');
// const h1 = document.createElement('h1');

// myDiv.addEventListener('mouseover', () => {
//   myDiv.appendChild(h1);
//   h1.innerHTML = 'Mouse is over me';
//   myDiv.style.backgroundColor = 'green';
//   myDiv.style.cursor = 'wait';
// });

// myDiv.addEventListener('mouseleave', () => {
//   myDiv.removeChild(h1);
//   myDiv.style.backgroundColor = 'white';
//   myDiv.style.cursor = 'initial';
// });

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'ArrowLeft') {
//     console.log('You pressed left arrow');
//   }
//   if (event.key === 'ArrowRight') {
//     console.log('You pressed right arrow');
//   }
//   if (event.key === 'ArrowDown') {
//     console.log('You pressed down arrow');
//   }
//   if (event.key === 'ArrowUp') {
//     console.log('You pressed up arrow');
//   }
// });

// let keys = {
//   ctrl: false,
//   e: false,
// };

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Control') {
//     keys.ctrl = true;
//   }
//   if (event.key === 'e') {
//     keys.e = true;
//   }

//   if (keys.ctrl && keys.e) {
//     console.log('both the keys pressed at once');
//   }
// });

// document.addEventListener('keyup', (event) => {
//   if (event.key === 'Control') {
//     keys.ctrl = false;
//   }
//   if (event.key === 'e') {
//     keys.e = false;
//   }
// });

// const checkboxInput = document.getElementById('checkbox-input');
// checkboxInput.addEventListener('change', (event) => {
//   console.log(event);
//   if (event.target.checked) {
//     console.log('checked');
//   }

//   if (!event.target.checked) {
//     console.log('unchecked');
//   }
// });

const textInput = document.getElementById('input-text');
const textElement = document.getElementById('input-value');
textInput.addEventListener('change', (event) => {
  console.log(event.target.value);
  textElement.innerHTML = event.target.value;
});
