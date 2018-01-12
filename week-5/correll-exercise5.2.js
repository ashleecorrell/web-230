/*
Title: Exercise 4.3

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
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program

// create a one dimensional array

var food = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"]

// output the results using the forEach() method

food.forEach(function (favorites){
    console.log(favorites);
})









// end program