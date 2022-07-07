// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);

// function test() {
//   var a = 1;
// }
// console.log(a);

// ***************************************

// const func = () => console.log(letVar);
// console.log(letVar);

// let letVar = 3;
// func();

// function test() {
//   console.log(a);

//   let a = 3;
// }
// test();

// ***************************************

// var x = 'global';
// let y = 'global';
// console.log(this.x);
// console.log(this.y);

// ***************************************

// console.log(typeof i);
// let i = 10;

// console.log(typeof undeclaredVariable);

// ***************************************

// function test() {
//   var foo = 33;
//   if (foo) {
//     let foo = foo + 55; // ReferenceError
//   }
// }
// test();

// ***************************************

// function go(n) {
//   // n here is defined!
//   console.log(n); // Object {a: [1,2,3]}

//   for (let n of n.a) {
//     // ReferenceError
//     console.log(n);
//   }
// }

// go({ a: [1, 2, 3] });

// ***************************************

// var a = 1;
// var b = 2;

// if (a === 1) {
//   var a = 11; // the scope is global
//   let b = 22; // the scope is inside the if-block

//   console.log(a); // 11
//   console.log(b); // 22
// }

// console.log(a); // 11
// console.log(b); // 2

// ***************************************

// let x = 1;
// switch(x) {
//   case 0:
//     let foo;
//     break;

//   case 1:
//     let foo; // SyntaxError for redeclaration.
//     break;
// }

// let x = 1;

// switch(x) {
//   case 0: {
//     let foo;
//     break;
//   }
//   case 1: {
//     let foo;
//     break;
//   }
// }

// ***************************************

// let x = 1;

// {
//   var x = 2; // SyntaxError for re-declaration
// }

// ***************************************
