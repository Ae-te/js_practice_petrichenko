"use strict";

const category = 'toys';

// console.log('htpps://someurl.com/' + category + '/' + '4');
//чтобы не разрасталась так строчка из-за конкатенации(+) 
//придумали интерполяцию

console.log(`htpps://someurl.com/${category}/5`);
//здесь использовали косые кавычки

const user = "Ivan";

alert(`Привет, ${user}`);