"use strict";

console.log('arr' + " - object");
console.log(4 + +" - object");//Nan, 
//т.к. +" - object" не может преобразоваться в число
console.log(4 + +"5");

let incr = 10,
    decr = 10;

// incr++;//инкремент - увеличение значения на 1
// decr--;//декремент - уменьшение значения на 1

// ++incr;//форма записи, когда мы ставим операторы перед значением называется
// //префиксная форма записи, когда ставим после - постфиксная(пример выше)
// --decr;

console.log(incr++);//когда используем инкремент и декремент 
//в постфиксной форме прямо сразу, тогда она сразу возвращает 
//старое значение, т.е. 10. 
//Уже после вывода переменная поменяет свое значение
console.log(decr--);

console.log(5%2);

console.log(2*4 === '8');//выведет все равно true, хотя 8 - это строка
console.log(2 + 2 * 2 !== '6');//2+4=6 не равно строке 6, поэтому true

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);