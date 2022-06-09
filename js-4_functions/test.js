// let value1 = +prompt('number 1');
// let value2 = +prompt('number 2');

// function calcSquare(a, b) {
//   if (arguments.length === 1) return a * a;
//   if (arguments.length === 2) return a * b;
// }

// console.log(calcSquare(value1));
// console.log(calcSquare(value1, value2));

/**********************************/

// function toStr(a, b, c) {
//   return '' + a + b + c;
// }
// console.log(toStr(1, 4, 7));

/*********************************/

// function getFactorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(getFactorial(5));

/*********************************/

// function isPerfectNumber(num) {
//   let result = 0;

//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) result = result + i;
//   }

//   if (result === num && result !== 0) {
//     return num;
//   }
// }
// isPerfectNumber(496);

// function findPerfectNumber(num1, num2) {
//   for (; num1 <= num2; num1++) {
//     if (isPerfectNumber(num1) === num1) console.log(num1);
//   }
// }
// findPerfectNumber(1, 9000);
