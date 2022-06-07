// сума діапазону чисел

// let value1 = +prompt('enter number 1');
// let value2 = +prompt('enter number 2');
// let result = 0;

// for (; value1 <= value2; value1++) {
//   result = result + value1;
// }
// console.log(result);

// найбільший спільний дільник

// let value1 = +prompt('enter number 1');
// let value2 = +prompt('enter number 2');
// let divider;

// if (value1 > value2) {
//   divider = value2;
// } else {
//   divider = value1;
// }

// while (divider !== 0) {
//   if (value1 % divider === 0 && value2 % divider === 0) {
//     break;
//   } else {
//     divider--;
//   }
// }
// console.log(divider);

// всі дільники числа

// let value = +prompt('enter number');

// for (let i = 1; i <= value; i++) {
//   if (value % i === 0) {
//     console.log(i);
//   }
// }

// 10 чисел

// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 0; i < 10; i++) {
//   let value = +prompt('enter number');
//   if (value > 0) positive++;
//   if (value < 0) negative++;
//   if (value === 0) zero++;
//   if (value % 2 === 0) even++;
//   if (value % 2 !== 0) odd++;
// }

// console.log('positive:', positive);
// console.log('negative:', negative);
// console.log('zero:', zero);
// console.log('even:', even);
// console.log('odd:', odd);

// дні тижня

// let day = 'monday';

// switch (day) {
//   case 'monday':
//     if (confirm('monday')) {
//       day = 'tuesday';
//     } else break;
//   case 'tuesday':
//     if (confirm('tuesday')) {
//       day = 'wednesday';
//     } else break;
//   case 'wednesday':
//     if (confirm('wednesday')) {
//       day = 'thursday';
//     } else break;
//   case 'thursday':
//     if (confirm('thursday')) {
//       day = 'friday';
//     } else break;
//   case 'friday':
//     if (confirm('friday')) {
//       day = 'saturday';
//     } else break;
//   case 'saturday':
//     if (confirm('saturday')) {
//       day = 'sunday';
//     } else break;
//   case 'sunday':
//     if (confirm('sunday')) {
//       day = 'monday';
//     } else break;
//   default:
//     alert('again monday');
// }

// for (let i = 2; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = `, i * j);
//   }
//   console.log('');
// }

// palindrom
// let value = prompt('enter value');
// let middle = Math.floor(value.length / 2);

// for (let i = 0; i < middle; i++) {
//   if (value[i] === value[value.length - 1 - i]) {
//     console.log('yes');
//   } else console.log('no');
// }
