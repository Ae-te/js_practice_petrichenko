"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;//передаем значение по ссылке на существующий уже объект
// // , а НЕ скопировали и создали новый похожий

// copy.a = 10;//получилось, как будто мы изменили и предыдущий объект, потому 
// //что обращаемся к ссылке, а не копии

// console.log(copy);
// console.log(obj);

//создает новый схожий объект (копию), на основе предыдущего
function copy(mainObj) {//mainObj - передаем объект. 
    let objCopy = {};

    let key;//ее можно создать и вне цикла
    for (key in mainObj) {
        objCopy[key] = mainObj[key]; //[key] - внутри объекта создаем новое свойство
        // = создаем копию из нашего главного объекта
    }

    return objCopy;//вытаскиваем наружу, чтобы можно было с ним взаимодействовать
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);//создали копию numbers

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));//2 объекта соединились,
//1 - объект, в который мы хотим все это поместить
//2 - объект, который мы помещаем


//Аналогично мы можем сделать тоже самое с пустым объектом, чтобы создать 
//копию объекта.
const clone = Object.assign({}, add);//создается новый объект, в него 
//помещается старый, и мы получаем копию.

clone.d = 20;

console.log(add);
console.log(clone);

// Теперь поработаем с МАССИВАМИ
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'jbbolew';

console.log(newArray);
console.log(oldArray);

//Познакомимся с новыми и новейшими стандартами ES6 и ES8
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

//пример чуть посложнее
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];//представим, что пришло с сервера и там ссылки

log(...num);

const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};//здесь ругается jshint, потому что оператор появился 
//в ES9. Чтобы 9 версия тоже рассматривалась, то в файле .jshintrc изменить 
//свойство esversion: 9;

console.log(newObj);