// способи створення об'єктів
// let user1 = {};
// let user2 = new Object();
// console.log(user1);
// console.log(user2);

/********************************/
// при присвоєнні obj1 в obj2 ми прасвоюємо посилання на об'єкт, а не сам об'єкт
// const obj1 = {
//   firstName: 'Ivan',
//   age: 20,
// };
// console.log(obj1);

// const obj2 = obj1;
// console.log(obj2);

// obj2.age = 25;
// console.log(obj1);
// console.log(obj2);

// assign to const
// const obj1 = { firstName: 'Ivan' };
// const obj2 = {};
// obj2 = obj1;
// console.log(obj2);

/********************************/
// способи копіювання об'єкта
// const obj1 = {
//   firstName: 'Ivan',
//   age: 20,
// };
// console.log(obj1);

// method 1
// const obj2 = {};
// for (let key in obj1) {
//   obj2[key] = obj1[key];
// }

// method 2
// const obj2 = Object.assign({}, obj1);

// method 3
// const obj2 = { ...obj1, city: 'New York', age: 40 };

// obj2.city = 'New York';
// obj2.age = 30;
// console.log(obj2);

/********************************/
// способи копіювання об'єкта (копіювання ключів з двох об'єктів в третій)
// const obj1 = {
//   firstName: 'Ivan',
//   secondName: 'Johnson',
// };

// const obj2 = {
//   age: 20,
// };

// method 1
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// method 2
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

/********************************/
// функції як ключі об'єкту
// const obj = {
//   firstName: 'Ivan',
//   printName() {
//     console.log(this.firstName);
//   },
//   printName2: function () {
//     console.log(this.firstName);
//   },
//   innerObj: {
//     printName3: () => console.log(this.firstName),
//   },
// };
// obj.printName();
// obj.printName2();
// obj.innerObj.printName3();

/********************************/
// методи для перебору об'єктів
// const human = {
//   firstName: 'Ivan',
//   age: 20,
//   city: 'New York',
// };
// console.log(human);

// поверне масив ключів
// const humanKeys = Object.keys(human);
// console.log(humanKeys);

// поверне масив значень
// const humanValues = Object.values(human);
// console.log(humanValues);

// поверне масив, де елементами будуть масиви - [key, value]
// const humanEntries = Object.entries(human);
// console.log(humanEntries);

/********************************/
// методи для отримання дескрипторів властивостей об'єкта
// const human = {
//   firstName: 'Ivan',
//   age: 20,
//   city: 'New York',
// };

// поверне усі властивості об'єкта з їх дескрипторами
// const humanProperties = Object.getOwnPropertyDescriptors(human);
// console.log(humanProperties);

// поверне конкретну властивість з її дескрипторами
// const humanProperty = Object.getOwnPropertyDescriptor(human, 'firstName');
// console.log(humanProperty);

/********************************/
// задання дескрипторів для конкретної властивості
// const human = {
//   age: 20,
// };

// const newHuman = Object.defineProperty(human, 'firstName', {
//   value: 'Ivan',
//   writable: false,
//   configurable: false,
//   enumerable: true
// });

// newHuman.firstName = 'John';
// console.log(newHuman);

/********************************/
// задання дескрипторів для всіх властивостей
// const human = {};

// const newHuman = Object.defineProperties(human, {
//   firstName: {
//     value: 'Ivan',
//     enumerable: false,
//   },
//   age: {
//     value: 20,
//     enumerable: true,
//   },
// });

// for (let key in newHuman) {
//   console.log(key);
// }

/********************************/
// видалення ключа об'єкта
// const human = {
//   firstName: 'Ivan',
//   age: 20,
//   city: 'New York',
// };
// Object.defineProperty(human, 'firstName', {
//   configurable: false,
// });
// console.log(human);

// delete human.firstName;
// console.log(human);

// test();
// test2();

// function test() {
//   console.log('hello 1');
// }

// const test2 = function() {
//   console.log('hello 2');
// }

// console.log(a);
// var a = 5;
// console.log(a);

const obj = {
  firstName: 'Paul',
  age: 40,
  cash: {
    uah: 100,
    usd: 50,
  },
};

let {
  firstName,
  age,
  cash: { uah, usd },
} = obj;
// const testUah = obj.cash.uah;
// console.log(firstName);
// console.log(uah);
// uah = 10;
// obj.cash.uah = 20;
// console.log(uah);
// console.log(obj);

const arr = [1, 2, 5];
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

function getMobile(manufacturer, model, year) {
  // return {
  //   manufacturer: manufacturer,
  //   model: model,
  //   year: year,
  // };
  return {
    manufacturer,
    model,
    year,
  };
}
getMobile('Samsung', 'Galaxy', '2020');
