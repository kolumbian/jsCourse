const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "Фильмов во мне дохуя");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const firstQuestionFilm = prompt("Один из последних просмотренных фильмов?","");
const firstQuestionRate = +prompt("На сколько оцените его?","");

const secondQuestionFilm = prompt("Ещё один из последних просмотренных фильмов?","");
const secondQuestionRate = +prompt("На сколько оцените его?","");

personalMovieDB.movies[firstQuestionFilm] = firstQuestionRate;
personalMovieDB.movies[secondQuestionFilm] = secondQuestionRate;

console.log(personalMovieDB);