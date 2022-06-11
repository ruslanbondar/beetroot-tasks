// const arr = ['first', 'second', 'third'];

// const arr = new Array('first', 'second', 'third');
// console.log(arr);
// arr[0] = 'zero';
// console.log(arr);

// const arr2 = [1, 2, 3];
// arr2[0] = arr2[0] + 10;
// console.log(arr2);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const arr = ['first', 'second', 'third'];
// for (let key in arr) {
//   console.log(key);
// }

// const users = ['A', 'B', 'C'];
// for (let user of users) {
//   console.log(user);
// }

// const obj = {
//   id: 1,
//   age: 20,
// };
// for (let value of obj) {
//   console.log(value);
// }

// const arr = [1, 2, 3];
// arr[999] = 20;
// console.log(arr);

// const arr = ['first', 'second', 'third'];

// const firstEl = arr.shift();
// console.log(firstEl);
// arr.push(firstEl);
// console.log(arr);

// arr.push('fourth');
// console.log(arr);

// const lastEl = arr.pop();
// console.log(arr);
// console.log(lastEl);

// arr.unshift('zero');
// console.log(arr);

// const arr = [10, 47, 4, 210, 1];
// arr.sort();
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

// const singleStudent = students.find(
//   (item) => item.age === 19 && item.firstName !== 'Bill',
// );
// console.log(singleStudent);

// const arr = [2, 5, 6, 8];

// const value = arr.reduce((accumulator, item) => {
//   return accumulator + item;
// }, 0);

// console.log(value);

const arr1 = [];
const arr2 = [];

const arr3 = [...arr1, ...arr2];

// concat method
