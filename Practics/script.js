// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "Фильмов во мне дохуя");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const firstQuestionFilm = prompt("Один из последних просмотренных фильмов?","");
// const firstQuestionRate = +prompt("На сколько оцените его?","");

// const secondQuestionFilm = prompt("Ещё один из последних просмотренных фильмов?","");
// const secondQuestionRate = +prompt("На сколько оцените его?","");

// personalMovieDB.movies[firstQuestionFilm] = firstQuestionRate;
// personalMovieDB.movies[secondQuestionFilm] = secondQuestionRate;

// console.log(personalMovieDB);



const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count <10) {
    confirm ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count <=30) {
    confirm ('Вы классический зритель');
} else if (personalMovieDB.count >30) {
    confirm ('Вы киноман');
} else {
    confirm ('Ошибка');
}

for (let i = 0; i < 2; i++) {
    let questionFilm = prompt("Один из последних просмотренных фильмов?","");
    let questionRate = +prompt("На сколько оцените его?","");

    if (questionFilm !=null && questionRate != null && questionFilm != '' && questionRate != '' && questionFilm.length < 50) {
        personalMovieDB.movies[questionFilm] = questionRate;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);