"use strict";

// 1 основной вариант создания объекта
const options = {
    name: 'test',//ключ(свойство): значение
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {//создали метод, кот. явл. ключом объекта
        console.log("Test");
    }
};

options.makeTest();//запустили метод, который мы создали сами

// деструктуризация объектов 
const {border, bg} = options.colors;
//{переменные, кот. хотим вытащить} = структура, из кот. хотим вытащить 
//эти объекты, т.е. их деструктурировать(разделить на более мелкие части)
console.log(border);

//2 вариант создания объекта, но его используют редко
// const obj = new Object();

// console.log(options.name);//вызвали свойство 1 вариант

// options[name]; //2 вариант, как вызвать свойство.
// лучше использовать этот вариант, чтобы 
// 1) избежать баги, связанные с кириллицей
// 2) в некоторых версиях браузеров встречаются баги, 
// из-за которых некорректно отображается запись через .


// delete options.name;//удалили свойство из объекта

// console.log(options);
// console.log(options["colors"]["border"]);//выводится black

// let counter = 0;//счетчик свойств объекта
// //перебор свойств объекта for in. При помощи for of перебрать ОБЪЕКТ нельзя
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {//если значение ключа - объект
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;//если оставить for in и эту строчку, то посчитаем количество 
//         //значений объекта, не углубляясь в подобъекты 
//         //(если непонятно, см. в лекцию)
//     }
// }
// console.log(counter);

//когда мы перебирали объект свойством for in, объекты внутри объекта 
//вывелись как [Object Object] - это строковое представление объектов
//(не может вывести объект в виде строки).

//В переборах можно использовать такой метод как рекурсия, мы будем 
//использовать его позже, он больше относится к функциям. Пока не изучили 
//эту тему, можно использовать перебор внутри перебора

// console.log(Object.keys(options).length);//метод берет объект и на его основании 
//создает массив, в кот. все элементы это - ключи, находящиеся в первой 
//части пары ключ-значение у объектов. Далее используем .length, чтобы узнать 
//кол-во элементов в массиве, т.е. кол-во значений объекта