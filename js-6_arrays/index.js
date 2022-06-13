// Способи створення масиву
// const arr = ['first', 'second', 'third'];
// const arr = new Array('first', 'second', 'third');

// console.log(arr);

// Присвоєння першому елементу масива нового значення
// arr[0] = 'zero';
// console.log(arr);

// const arr2 = [1, 2, 3];
// arr2[0] = arr2[0] + 10;
// console.log(arr2);

// Ітерація по масиву за допомогою циклу
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const arr = ['first', 'second', 'third'];

// Перебір ключів масива (ключами елементів масива є його індекси), цикл for in
// for (let key in arr) {
//   console.log(key);
// }

// Перебір елементів масива, цикл for of
// const users = ['A', 'B', 'C'];
// for (let user of users) {
//   console.log(user);
// }

// const obj = {
//   id: 1,
//   age: 20,
// };

// Цикл for of не працює для об'єктів
// for (let value of obj) {
//   console.log(value);
// }

// Присвоєння значення елементу під індексом 999 => [1, 2, 3, ...996 елементів undefined..., 20]
// const arr = [1, 2, 3];
// arr[999] = 20;
// console.log(arr);

// const arr = ['first', 'second', 'third'];

// shift() - видалення елементу з початку масива
// const firstEl = arr.shift();
// console.log(firstEl);
// arr.push(firstEl);
// console.log(arr);

// push() - додання елементу в кінець масиву
// arr.push('fourth');
// console.log(arr);

// pop() - видалення елементу з кінця масива
// const lastEl = arr.pop();
// console.log(arr);
// console.log(lastEl);

// unshift() - додання елементу на початок масива
// arr.unshift('zero');
// console.log(arr);

// сортування масиву. За замовчуванням відбувається алвафітне сортування
// const arr = [10, 47, 4, 210, 1];
// arr.sort();

// Арифметчне сортування масиву
// arr.sort((a, b) => a - b);
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// const arr = [
//   { firstName: 'John', age: 20 },
//   { firstName: 'Bill', age: 19 },
//   { firstName: 'Bob', age: 25 },
// ];

// arr.push({ firstName: 'Peter', age: 40 });
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].age);
// }
// console.log(arr);

// map() - метод для ітерації по масиву. Повертає новий масив, не змінюючи вихідне значення (масив arr)
// const newArr = arr.map((item) => {
//   return { ...item, age: item.age + 1 };
// });
// console.log(newArr);

// const numArr = [1, 2, 3];

// const newNumArr = numArr.map(function (item, index) {
//   console.log(`item for ${index + 1} iteration: ${item}`);
//   console.log(`index for ${index + 1} iteration: ${index}`);
//   if (index === 1) {
//     return item + 10;
//   }

//   return item;
// });
// console.log(numArr);
// console.log(newNumArr);

// filter() - повертає новий масив зі значеннями, що задовольняють умову, що передається
// const numArr = [1, 2, 3, 4, 5, 6];
// const filteredNumArr = numArr.filter((item) => item >= 3);
// console.log(filteredNumArr);

// const students = [
//   { firstName: 'John', age: 20 },
//   { firstName: 'Bill', age: 19 },
//   { firstName: 'Bob', age: 25 },
//   { firstName: 'Kyle', age: 19 },
// ];

// const filteredStudentsByAge = students.filter((item) => item.age < 25);
// console.log(filteredStudentsByAge);

// find() - працює як filter, але повертає не масив, а один його елемент (перший елемент, що задовольняє умову)
// const singleStudent = students.find(
//   (item) => item.age === 19 && item.firstName !== 'Bill',
// );
// console.log(singleStudent);

// const arr = [2, 5, 6, 8];

// reduce() - метод для ітерації по масиву. Другим аргументом приймає початкове значення. Функція колбек () => {} приймає першим аргументом певний accumulator, в який на кожній ітерації додається значення поточного елементу ітерації
// const value = arr.reduce((accumulator, item) => {
//   return accumulator + item;
// }, 0);

// console.log(value);

// об'єднання декількох масивів в один
// const arr1 = [];
// const arr2 = [];

// за допомогою spread оператору (...)
// const arr3 = [...arr1, ...arr2];

// за допомогою методу concat
// const arr3 = arr1.concat(arr2);
