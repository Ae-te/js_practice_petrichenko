"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// //+ - динамическая типизация - превращает строку в номер
// console.log(typeof(answer));//typeof - показывает тип переменной

const answers = [];

answers [0] = prompt('Как ваше имя?', '');//пустая строка по умолчанию 
//для explorer
answers [1] = prompt('Как ваша фамилия?', '');
answers [2] = prompt('Сколько вам лет?', '');

// document.write(answers);
console.log(typeof(answers));
console.log(typeof(null));//официально признаная ошибка: выведется object