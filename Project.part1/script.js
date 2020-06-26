'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    for (let i = 0; i < 2; i++) {
        const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
              secondQuestion = prompt('На сколько оцените его?', '');

        if(firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
        
    }

    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }
    else {
        console.log("Произошла ошибка");
    }

console.log(personalMovieDB);
