// const str = true;
// console.log(Object.getPrototypeOf(str));

// Object
// const obj = new Object();
// const junior = {
//   skill1: 'html',
// };

// const middle = {
//   skill2: 'js',
// };

// const senior = {
//   skill3: 'react',
// };

// null <= Object <= junior <= middle <= senior

// let animal = {
//   eats: true,
//   walk() {
//     console.log('Animal walk');
//   },
// };
// console.log(animal);

// let rabbit = {
//   jumps: true,
//   walk() {
//     console.log('Rabbit walk');
//   },
// };
// console.log(rabbit);
// rabbit.walk();
// rabbit.__proto__ = animal;
// rabbit.walk();
// console.log(rabbit);

// null <= Object <= animal <= rabbit

// ************************************

// rabbit => animal => object => null
// animal => object => null

// let animal = {
//   eats: true,
//   walk() {
//     console.log('animal walks');
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };
// console.log(rabbit);

// rabbit.walk = function () {
//   console.log('rabbit walks');
// };

// animal.walk();
// rabbit.walk();

// console.log(Object.getPrototypeOf(animal));
// console.log(Object.getPrototypeOf(rabbit));

// ************************************

// let animal = {
//   eats: true,
//   walk() {
//     console.log('animal walks');
//   },
// };

// let rabbit = {
//   jumps: true,
// };

// // rabbit.__proto__ = animal;
// Object.setPrototypeOf(rabbit, animal);

// rabbit.walk();
// console.log(rabbit.eats);
// console.log(rabbit.jumps);

// rabbit.walk = function () {
//   console.log('rabbit walks');
// };
// rabbit.walk();

// ************************************

// let animal = {
//   eats: true,
//   walk() {
//     console.log('animal walks');
//   },
// };

// let rabbit = {
//   jumps: true,
// };

// Object.setPrototypeOf(rabbit, animal);

// // Object.keys only returns own keys
// console.log(Object.keys(rabbit)); // jumps

// // for..in loops over both own and inherited keys
// for (let key in rabbit) console.log(key); // jumps, then eats

// for (let key in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(key);

//   if (isOwn) {
//     console.log(`Our: ${key}`); // Our: jumps
//   } else {
//     console.log(`Inherited: ${key}`); // Inherited: eats
//   }
// }

// ************************************

// let user = {
//   name: 'John',
//   surname: 'Smith',

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// console.log(admin.fullName);

// admin.fullName = 'Alice Cooper';

// console.log(admin.fullName);
// console.log(user.fullName);

// console.log(admin.isAdmin);
// console.log(user.isAdmin);

// ************************************

// function Car(color) {
//   if (!new.target) {
//     return `${color} car`;
//   }

//   this.color = color;
// }

// const a = Car('red');
// const b = new Car('red');
// console.log(a);
// console.log(b);

// ************************************

// так робити не треба
// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   function getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const user = new User('Ruslan', 'Bondar');
// console.log(user);

// console.log(Object.getPrototypeOf(user));

// ************************************

// function Car() {}
// console.log(Object.getPrototypeOf(Car));

// class User {}
// console.log(Object.getPrototypeOf(User));

// ************************************

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  }
}

const user = new User('John', 'Doe');
console.log(user);
console.log(user.lastName);
console.log(user.fullName);

const user2 = new User('Boris', 'Johnson');
console.log(user2);

// user.fullName = 'Ruslan Bondar';
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.fullName);

// console.log(Object.getPrototypeOf(user));

// ************************************

class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getInfo() {
    console.log(`${this.model} ${this.year} ${this.color}`);
  }
}

const audi = new Car('Audi', '2015', 'green');
console.log(audi);
