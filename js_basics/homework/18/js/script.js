/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

//1)
function start() {//проверяет, чтобы вводили именно число просмотренных фильмов
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remeberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;// Чтобы откатить счетчик назад и запустить вопросы еще раз
        }
    }
}

// remeberMyFilms();

function detectPersonalLevel() {//Определить уровень кинонасмотренности
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

//2)
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

//3)
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        //код записывается на микросекунды быстрее, потому что не создавали каждый раз
        //переменную под жанр отдельно, а сразу записали ее в массив
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);//записываются жанры в массив
        //массив должен начинаться с нуля, поэтому i - 1, 
        //если этого не сделать, то 0-ой элемент будет empty(пустой элемент) 
        //и всего будет 4 элемента
    }
}

writeYourGenres();

