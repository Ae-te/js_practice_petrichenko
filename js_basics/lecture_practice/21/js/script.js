"use strict";

const arr = [2, 13, 26, 8, 10];//Создали массив
arr.sort(compareNum);
console.log(arr);

//sort использует алгоритм быстрой сортировки. При помощи этой функции, 
//сортируется корректно. ДОПИСАТЬ ПОЧЕМУ И ПРОЧИТАТЬ про быструю сортировку
function compareNum(a, b) {//сравнение чисел
    return a - b;
}

// arr[99] = 0;//элементов в массиве 6, а показывает 100, потому что 
// //создалось 94 пустые ячейки
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//Методы, которые работают с концом массива.

// arr.pop();//удаляет последний элемент нашего массива
// arr.push(10);//обратный метод: добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {//цикл работает до тех пор, пока 
// //не закончатся элементы внутри массива 
//     console.log(arr[i]);
// }

//value (любая перем.) - каждый отдельный элемент массива
//of - в каком массиве будем работать
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");//будет лежать большая строка с продуктами ч/з ,
// const products = str.split(", ");//(через какой разделитель будут написаны 
// //товары в строке). products - массив
// products.sort();//отсортируется в алфавитном порядке
// console.log(products.join('; '));//получили строку, где бывшие элементы 
// //массива разделяются ч/з ;


