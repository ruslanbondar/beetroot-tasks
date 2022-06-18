const products = [
  { title: 'bread', amount: 4, isBought: true, price: 17, sum: 68 },
  { title: 'egg', amount: 20, isBought: false, price: 3, sum: 60 },
  { title: 'apple', amount: 10, isBought: true, price: 6, sum: 60 },
  { title: 'tomato', amount: 3, isBought: false, price: 9, sum: 27 },
];

const boughtProducts = products.filter((item) => item.isBought);
const notBoughtProducts = products.filter((item) => !item.isBought);
const reorderedProductList = [...notBoughtProducts, ...boughtProducts];
console.log(reorderedProductList);

const buyProduct = (productName) => {
  const newProductsList = products.map((item) => {
    if (productName === item.title && item.isBought === false) {
      item.isBought = true;
    }
    return item;
  });

  return newProductsList;
};
console.log(buyProduct('egg'));

const removeProduct = (productName) => {
  return products.filter((item) => item.title !== productName);
};
console.log(removeProduct('bread'));



let newProductList;
const addProduct = (title) => {
  newProductList = products.map((item) => {
    if (item.title === title) {
      item.amount++;
      item.sum = item.amount * item.price;
    }
    return item;
  });

  const newProduct = products.find((item) => item.title === title);

  if (!newProduct) {
    newProductList.push({
      title,
      amount: 1,
      isBought: false,
      price: 10,
      sum: 10,
    });
  }
  return newProductList;
};

console.log(addProduct('egg'));
