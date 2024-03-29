"use strict";

let str = "some";
let strObj = new String(str);//создали строку(на основе str), но таким 
//синтаксисом не пользуются

// console.log(typeof(str));//строка
// console.log(typeof(strObj));//объект
//так происходит, когда в js пытаемся использовать метод на строке, т.е. 
//он оборачивает строку в какой-то объект, потом использует метод, который 
//есть у этого объекта, потом возвращает все обратно. 
//Т.е. сначала примитивный тип данных, потом превращается в объект, 
//потом снова вернулся в примитив.
console.dir([1, 2, 3]);


const soldier = {//общий прототип солдат
    health: 400,
    armor: 100,//броня
    sayHello: function() {
        console.log("Hello");
    }
};

// 1.
const jonh = Object.create(soldier);//создали новый объект jonh, который 
//будет прототипно наследоваться от солдата


// const jonh = {//создали рядового солдата
//     health: 100
// };

//устаревший формат, который почти не используют
// jonh.__proto__ = soldier;//установили прототип Джона в солдата
//вместо __proto__ сейчас нужно использовать Object.create(), 
//Object.getPrototypeOf(), Object.setPrototypeOf()

// 2.
// Object.setPrototypeOf(jonh, soldier);//установили прототип для Джона 
//от солдата. Это если нужно сделать в динамике, когда Джон уже существовал
//1 - объект, которому назначим прототип
//2 - объект, прототип которого устанавливаем


// console.log(jonh.armor);
jonh.sayHello();

// 3. На практике тут не рассмотрели, он встречается чуть реже, 
//но встречается!
