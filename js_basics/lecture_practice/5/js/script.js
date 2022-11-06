"use strict";

// a = 15;
// console.log(a);

// console.log(number); - ошибка
let number = 5;
let NUmber = 3;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

//Не стоит использовать var - это уже устаревшая форма.
//+ var существует еще ДО того, как она была объявлена в коде, 
//и соответсвенно она видна везде

console.log(name);//выведется не ошибка, а undefined
//такое поведение, когда мы можем использовать до того, 
//как переменная объявлена называется хостинг (всплытие переменной)
var name = 'Ivan';
// name = 'Alex';

{
    let result = 50;
}

// console.log(result);