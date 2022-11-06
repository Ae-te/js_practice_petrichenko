"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do { //призыв к действию
//     console.log(num);
//     num++;
// }
// while (num < 55); //проверка условия


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;// здесь прервется цикл на числе 6, 
        // // в итоге последнее число вывода - это 5
        continue;// пропустит шаг, с числом 6
    }

    console.log(i);
}