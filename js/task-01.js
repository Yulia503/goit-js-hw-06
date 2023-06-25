
// Завдання 1

// HTML містить список категорій ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт, який:

//     Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//     Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const list = document.querySelector('#categories'); //ми знах. перший елем. з таким ід.
const amountItems = list.children.length;  // визчач. скільки елем. містить в собі ul, тобто скільки вміщ. li
console.log('Number of categories:', amountItems);


const itemElement = document.querySelectorAll('.item'); //знах. всі елементи з класом item
itemElement.forEach (item => {   // перебираємо кожен елемент
    console.log('Category:', item.firstElementChild.textContent, 'Elements:', item.lastElementChild.children.length);
}) // визнач. назву кожного 0 елем. в кожній li, запис. за доп. textContent
// визнач. кількість елементів за доп. children.length в кожному першому елем.[1]
