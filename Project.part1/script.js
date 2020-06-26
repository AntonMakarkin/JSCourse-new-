'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),

    personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },

    firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
    secondQuestion = prompt('На сколько оцените его?', ''),
    thirdQuestion = prompt('Один из последних просмотренных фильмов?', ''),
    fourthQuestion = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[thirdQuestion] = fourthQuestion;

console.log(personalMovieDB);