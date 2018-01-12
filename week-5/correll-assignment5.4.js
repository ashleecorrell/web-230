/*
Title: Exercise 5.4

Author: Richard Krasso

Date: 12 January 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about array methods
*/

var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 5.4")); 
console.log("\n");

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
 */

// start program
// create an array-like object

var famousComposers = [
    {
        firstName:"Kanye",
        lastName:"West",
        genere:"Rap",
        rating:"7",
    },
    {
        firstName:"Mariah",
        lastName:"Carey",
        genere:"Pop",
        rating:"8"
    },
    {
        firstName:"Carrie",
        lastName:"Underwood",
        genere:"Country",
        rating:"8",
    },
    {
        firstName:"Taylor",
        lastName:"Swift",
        genere:"Pop",
        rating:"9"
    },
    {
        firstName:"Ludwig",
        lastName:"Beethoven",
        genere:"Classical",
        rating:"5",
    },
];

//sort composers by rating

console.log("-- COMPOSER BY RATING --");

var composersByRating = famousComposers.map(function(composer) {
    console.log("Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName)

});

console.log("\n");

//sort composers by genre

console.log("-- COMPOSER BY GENRE --");

var composersByGenre = famousComposers.map(function(composer) {
    console.log("Genre:" + composer.genere + "\n" + "Composer: " + composer.lastName)

});

// end program