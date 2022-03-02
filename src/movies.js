import { movies } from './data.js';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  const rawList = movies.map(movie => movie.director);
  const cleanList = rawList.filter((element, index) => rawList.indexOf(element) === index);
  return cleanList;
}

console.log('1. Clean List of All Directors:');
console.log(getAllDirectors());

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  const steven = movies.filter(movie => movie.director === 'Steven Spielberg');
  const stevenDrama = steven.filter(movie => movie.genre.includes('Drama'));
  return stevenDrama;
}

console.log('\n2. Drama movies directed by Spielberg:');
console.log(howManyMovies());

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  const scores = movies.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);
  const avg = scores / movies.length;
  return Number(avg.toFixed(2));
}

console.log('\n3. Average score of all movies:');
console.log(scoresAverage());

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  const drama = movies.filter(movie => movie.genre.includes('Drama'));
  const scores = drama.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);
  const avg = scores / movies.length;
  return Number(avg.toFixed(2));
}

console.log('\n4. Average score of Drama movies:');
console.log(dramaMoviesScore());

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const orderYear = movies.sort((a, b) => {
    if (a.year > b.year) return 1;
    return -1;
  });
  return orderYear;
}

console.log('\n5. Movies ordered by ascending year:');
console.log(orderByYear());

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const orderTitle = movies.sort((a, b) => {
    if (a.title > b.title) return 1;
    return -1;
  });
  return orderTitle.slice(0, 20);
}

console.log('\n6. Movies ordered by title:');
console.log(orderAlphabetically());

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  movies.forEach(movie => {
    const hours = movie.duration.split('h')[0];
    let minsRaw = movie.duration.split('h')[1];
    if (minsRaw == '') minsRaw = ' 0min';
    const mins = minsRaw.split('min')[0].trim();
    const totalMin = Number(hours) * 60 + Number(mins);
    movie.duration = totalMin.toFixed() + 'min';
    console.log(movie.duration);
  });
  return movies;
}

console.log('\n7. Time format changed to minutes:');
console.log(turnHoursToMinutes());

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {

}

// console.log('\n8. Best yearly score average:');
// console.log(bestYearAvg());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
