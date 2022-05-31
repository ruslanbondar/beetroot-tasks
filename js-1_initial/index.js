// var, let, const - команди для об'явлення змінних в JS

/*
  camelCase - thisIsMyFirstVariable
  snake_case - this_is_my_first_variable
  kebab-case - this-is-my-first-variable - do not use in JS

  1. Не можна починати назву змінної з цифри
  2. Не можна використовувати спец символи, за винятком $ і _
  3. Не може бути пробілів у назві змінної
  4. Не можна називати змінні кирилецею (це валідно, але неправильно)
*/

/*
  number - 5;
  string - 'hello';
  boolean - true або false;
  undefined - коли змінна об'явлена, але їй не присвоєно значення;
  null - обнулення змінної;
  object - {};
  symbol;
  bigInt;
*/

/*
  Falsy value in JS:
  - false
  - ''
  - null
  - undefined
  - 0
  - NaN
*/

// let testVariable = 'Hello' + ' world' + 5; => string
// console.log(testVariable);

// let testVariable = '6' - 2;  => number
// console.log(testVariable);

// let testVariable = 'string' - 2; => NaN
// console.log(testVariable);

/*
let str = '5'; 
console.log(typeof str);
str = Number(str); ===================> приведення до number
console.log(typeof str);
*/

/*
let num = 5;
console.log(typeof num);
num = num.toString(); ===================> приведення до string
console.log(typeof num);

num = String(num); ===================> приведення до string
console.log(typeof num);
*/

/*
let str = '2';
console.log(Boolean(str)); ===================> приведення до boolean
console.log(!!str); ===================> приведення до boolean
*/

let squareSide = prompt('Enter one side of square:', 0);
let temp = squareSide * 4;
console.log('Square perimeter:', temp);

let firstName = prompt('Enter your name:');
console.log(firstName);
