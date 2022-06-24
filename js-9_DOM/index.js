// DOM - Document Object Model; представлення web сторінки у вигляді об'єктів, які ми можемо змінювати за допомогою JS

// window.document
// document
// document - глобальний об'єкт браузера, точка входу до всіх елементів сторінки

// console.log(window.document);
// console.log(document.title);

// document.title = 'New title';
// console.log(document.title);

// document.write('hello'); // не користуємось цим методом :)

// node - елемент DOM дерева

// getElementById('id') - повертає один елемент з відповідним id
// getElementsByClassName('class') - повертає список елементів з відповідними класами
// getElementsByTagName('div') - повертає список елементів з відповідними назвами тегів

// querySelector('#id'), querySelector('.class') - повертає один елемент, що задовольняє аргумент, який передаємо
// querySelectorAll - повертає список елементів, що задовольняє аргумент, який передаємо
// '#id', '.class', 'tag'

const myDivById = document.getElementById('my-div');
// console.log('id:', myDivById);

// const myDivByClassName = document.getElementsByClassName('my-div');
// console.log('class:', myDivByClassName);

// const myDivByQuery = document.querySelector('#my-div');
// console.log('query selector:', myDivByQuery);

// const myDivByQueryAll = document.querySelectorAll('#my-div');
// console.log('query selector all:', myDivByQueryAll);

// const myDivByTagName = document.getElementsByTagName('div');
// console.log('tag:', myDivByTagName);

// let mainTitle = document.createElement('h1'); // створюємо dom node для h1
// console.log(mainTitle);
// const newContent = document.createTextNode('Hello!'); // створюємо text node
// console.log(newContent);
// mainTitle.appendChild(newContent); // вставляємо text node в h1
// document.body.insertBefore(mainTitle, myDivById); // вставляємо h1 в документ (в цьому випадку в body)

// function insertAfter(newNode, existingNode) {
//   existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }
// insertAfter(mainTitle, myDivById);

const unorderedList = document.getElementById('list-id');
// let li = document.createElement('li');
// unorderedList.appendChild(li);
// li.innerHTML = '4'; // вставляємо text node в створений елемент li

for (let i = 4; i < 10; i++) {
  let li = document.createElement('li');
  unorderedList.appendChild(li);
  li.innerHTML = `${i} - element`;
}
// console.log(unorderedList);

// parent, child
// console.log(unorderedList.parentNode); // доступ до батьківського елемента unorderedList
// console.log(unorderedList.childNodes); // доступ до списку всіх дочірніх nodes unorderedList (text nodes + html elements)
// console.log(unorderedList.children); // доступ до списку дочірніх nodes (html elements)

// styling
unorderedList.style.backgroundColor = 'brown';
unorderedList.style.color = 'yellow';

const childrenList = unorderedList.children;
// console.log(childrenList);

for (let i = 0; i < childrenList.length; i++) {
  if (i % 2 !== 0) {
    childrenList[i].style.color = 'blue';
  }
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // console.log('click')
  unorderedList.style.display = 'none';
});
