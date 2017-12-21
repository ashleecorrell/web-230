/*
Title: Exercise 4.2

Author: Richard Krasso

Date: 19 December 2017

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about arrays
*/

var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 4.2")); 
console.log("\n");

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program
//create an array with 5 fruit elements
var fruit = ["Banana", "Orange", "Pear", "Apple", "Mango"];

// function getFruit() that accepts a one dimentional array
function getFruit(arr) {
    for (var f = 0; f < fruit.length; f++) {
        console.log(fruit[f]);
    }
}


// Output from the getFruit() function
getFruit(fruit);




// end program