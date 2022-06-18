const arr = [1, 40, 30, 5, 9, -3];

// every
const everyTrue = arr.every((item) => item < 50);
// console.log(everyTrue);

// some
const someTrue = arr.some((item) => item < 0);
// console.log(someTrue);

// findIndex
const arrIndex = arr.findIndex((item) => item > 50);
// console.log(arrIndex);

// Array.from
// const str = 'hello';
// const newArr = Array.from(str);
// console.log(newArr);

function test() {
  const argArray = Array.from(arguments);
  console.log(arguments);
  console.log(argArray);
}
test(1, 2, 3);

// includes
const isInArray = arr.includes(41);
console.log(isInArray);

// Array.isArray
const obj = {};
console.log(Array.isArray(arr));
console.log(typeof arr);

// join
// reverse
function isPalindrom(str) {
  // const arr = str.split('');
  // const reversedArr = arr.reverse();
  // const reversedStr = reversedArr.join('');

  const reversedStr = str.split('').reverse().join('');

  if (str === reversedStr) {
    return 'palindrom'
  } else return 'not palindrom'
}
console.log(isPalindrom('73337'));

// indexOf
const indexOfArray = arr.indexOf(40);
console.log(indexOfArray);

// slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));

// splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
