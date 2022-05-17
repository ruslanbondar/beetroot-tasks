// за допомогою const об'явлена певна змінна, в яку ми присвоюємо значення виразу document.getElementById()
// document.getElementById(id) повертає html елемент, до якого ми можемо звертатись за допомогою js
// цей html елемент зберігається у змінній
const burgerButton = document.getElementById('burger');
const closeButton = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');

// додаємо для html елемента подію click - по кліку на елемент зробити певну дію
burgerButton.addEventListener('click', function handleClick() {
  // по кліку на елемент burgerButton додати для елемента mobileMenu стиль display: flex;
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', function handleClick() {
  mobileMenu.style.display = 'none';
});
