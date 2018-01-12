/*
Title: Exercise 5.3

Author: Richard Krasso

Date: 12 January 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about array methods
*/

var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 5.2")); 
console.log("\n");

/*
 Expected output:

 FirstName LastName
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program
// create an array-like object with five famouse composers

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
]
//iterate over the array-like object using the forEach() method

famousComposers.forEach(function (composer){
    console.log("Last Name: " + composer.lastName + ", Genere: " + composer.genere + ", Rating: " + composer.rating)
})




// end program