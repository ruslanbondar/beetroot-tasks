
// while (i <= 10 && i !== 0) {
//   i--;
//   console.log(i);
// }

// while (i < n) {
//   console.log(i);
//   i++;

//   if (i === 5) {
//     break;
//   }
// }

// while (i < n) {
//   i++;
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
let i = 0;
// do {
//   i++;
//   console.log(i);
// } while (i < 10);

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // if (j === 5) {
    //   break outer;
    // }
    console.log(i); 
  }
  // if (i === 5) {
  //   break;
  // }
  // if (i === 5) {
  //   break;
  // }
  // console.log(i);
}

let str = prompt('enter your name');
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
