const list = document.querySelector('#categories'); //ми знах. перший елем. з таким ід.
const amountItems = list.children.length;  // визчач. скільки елем. містить в собі ul, тобто скільки вміщ. li
console.log('Number of categories:', amountItems);


const itemElement = document.querySelectorAll('.item'); //знах. всі елементи з класом item
itemElement.forEach (item => {   // перебираємо кожен елемент
    console.log('Category:', item.children[0].textContent, 'Elements:', item.children[1].children.length);
}) // визнач. назву кожного 0 елем. в кожній li, запис. за доп. textContent
// визнач. кількість елементів за доп. children.length в кожному першому елем.[1]
