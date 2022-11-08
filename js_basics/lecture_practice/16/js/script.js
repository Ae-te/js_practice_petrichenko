"use strict";

let num = 20;//глобальная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 10;//локальная переменная
}

showFirstMessage("Hello, World!");//Вызов функции
console.log(num);//здесь выведется значение глобальной переменной, 
//т.к. локальная виднеется только внутри блока

// function calc(a, b)  {
//     return (a + b);
//     //console.log('jgfk');   unreachable code
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

//1)
function ret() {//Function Declaration – классическая запись функции
    let num = 50;

    //длинный код


    return num;//возвращается результат данной функции
}

const anotherNum = ret();//записали результат предыдущей функции 
//в другую, внешнюю переменную
console.log(anotherNum);

//2)
const logger = function() {//Function Expression
    console.log("Hello");
};//В конце такой функции {} ставится ;

logger();//Вызов функции

//3)
const calc = (a, b) => {//стрелочная функция
    console.log('1');
    return a + b;
};