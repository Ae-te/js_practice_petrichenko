"use strict";

let number = 4.6;

console.log(-4/0);//-infinity
console.log('string' * 9);//NaN

const persone = "Alex fdrr gdrhg greg 56";

const bool = false;

// console.log(something);//это тип данных null (значения не существует)
// В явном виде (null) мы будем получать его очень редко

let und;
console.log(und);// получаем undefined

const obj = {
    //данные - свойства объекта(ключ), действия - методы.
    name: "John",//ключ: значение 
//внутри массива просто пишутся значения, без ключа, 
//поэтому это частный случай объекта
    age: 25,
    isMarried: false
};

//К свойствам объекта можно обратится 2 способами: через . или []. 
//Лучше через .
// console.log(obj.name);
console.log(obj["age"]);//без кавычек age воспринимается 
// за переменную, которой не существует

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, [] ];//массив картинок
//внутри массива могут быть любые типы данных
console.log(arr[1]);