// Завдання 4

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//     Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//     Оновлюй інтерфейс новим значенням змінної counterValue.


const valueStart = document.querySelector('#value')
console.log(valueStart.textContent); // 0

const decrementBtn = document.querySelector('[data-action="decrement"]')

console.log(decrementBtn.textContent); // -1 витягуємо кнопку -1

const incrementBtn = document.querySelector('[data-action="increment"]')
console.log(incrementBtn.textContent); // +1 витягуємо кнопку +1

let counterValue = 0;

decrementBtn.addEventListener('click', onClickMinus);//прослуховуємо кнопку -
incrementBtn.addEventListener('click', onClickPlus); //прослуховуємо кнопку +

function onClickMinus (evt) { // ств. колбек ф-ю яка буде відпрац. при натискані на кнопку -1, буде мінусувати число
    counterValue -= 1;
    valueStart.textContent = `${counterValue}`;
}

function onClickPlus (evt) {
    counterValue += 1;
valueStart.textContent = `${counterValue}`;
}