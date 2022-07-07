// console.log(this);

const obj = {
  firstName: 'Bob',
  lastName: 'Dylan',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName);
  },
  fullName2: function () {
    console.log(this);
  },
  test: () => console.log(this),
};
// obj.test();

// obj.fullName();

const printFullName = obj.fullName.bind(obj);
printFullName();

const obj2 = {
  firstName: 'Brad',
  lastName: 'Pitt',
};

// const printFullName2 = obj.fullName.bind(obj2);
// printFullName2();

obj.fullName.call(obj2);
obj.fullName.apply(obj2);

function add(c, d) {
  console.log(this.a + this.b + c + d);
}
const ten = { a: 1, b: 2 };
add.call(ten, 3, 4);
add.apply(ten, [3, 4]);
