// задача 1
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
// Висновок на екран з інформацією про автомобіль.
// Додавання водія, який має право керувати автомобілем.
// Заправка автомобіля.
// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.

// const supercar = {
//   producer: 'VAZ',
//   model: '2107',
//   year: '1998',
//   averageSpeed: 80,
//   fuelTank: 40,
//   currentFuel: 15,
//   averageWasteOfFuel: 9,
//   newDrivers: ['Vasyl', 'Petro', 'Ivan'],
//   drivers: [
//     {
//       firstName: 'Ivan',
//       canDrive: true,
//     },
//     {
//       firstName: 'Petro',
//       canDrive: false,
//     },
//     {
//       firstName: 'Vasyl',
//       canDrive: true,
//     },
//   ],
//   getInfo() {
//     console.log(
//       `Producer: ${this.producer}\n`,
//       `Model: ${this.model}\n`,
//       `Year: ${this.year}\n`,
//       `Average speed: ${this.averageSpeed}\n`,
//       `Fuel tank: ${this.fuelTank}\n`,
//       `Current fuel: ${this.currentFuel}\n`,
//       `Average waste of fuel: ${this.averageWasteOfFuel}\n`,
//       `Drivers: ${this.drivers.map((driver) => driver.firstName)}`,
//     );
//   },
//   addDriver(driver) {
//     this.newDrivers.push(driver);
//   },
//   addFuel(amount) {
//     if (amount > 0) {
//       if (this.fuelTank - this.currentFuel >= amount) {
//         this.currentFuel = this.currentFuel + amount;
//       } else console.log('Your fuel tank is full');
//     }
//   },
//   countTime(distance, driverName) {
//     let time = distance / this.averageSpeed;

//     for (let i = 1; i <= Math.floor(time); i++) {
//       if (i % 4 === 0) time = time + 1;
//     }
//     const drunkDriver = this.newDrivers.find((item) => item === driverName);
//     // const drunkDriver = this.drivers.find(
//     //   (driver) => driver.canDrive === false,
//     // );
//     if (drunkDriver === driverName) {
//       console.log(`Welcome to the car ${driverName}`);
//     } else console.log('You cannot drive, you are drunk');

//     const isEnoughFuel = (this.currentFuel / this.averageWasteOfFuel) * 100;
//     if (isEnoughFuel > distance) {
//       console.log('You have enough fuel');
//     } else console.log('You need to add fuel');

//     console.log(`Your trip will be ${time} hours`);
//   },
// };

// supercar.getInfo();
// supercar.addDriver('Ruslan');
// supercar.getInfo();
// supercar.addFuel(23);
// supercar.getInfo();
// supercar.countTime(400, 'Vasyl');

// задача 2

// const time = new Date().getTime();
// const date = new Date().getTime();
// console.log(time);
// console.log(date);

// console.log(new Date('06 11 2022').toISOString());

const currentDate = new Date();

const dateObj = {
  hours: currentDate.getHours(),
  minutes: currentDate.getMinutes(),
  seconds: currentDate.getSeconds(),
  getTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },
};
console.log(dateObj.hours)

dateObj.getTime();
