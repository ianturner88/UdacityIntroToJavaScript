/* 
Directions:
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

var favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  };

function movies(messageFunction, name) {
    messageFunction(name);
  }

movies(favoriteMovie, "Finding Nemo");

console.log(movies(favoriteMovie, "Finding Nemo"));