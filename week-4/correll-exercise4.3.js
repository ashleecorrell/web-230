/*
Title: Exercise 4.3

Author: Richard Krasso

Date: 21 December 2017

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about filtering values from arrays
*/

var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 4.2"));
console.log("\n")

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program
// create a one dimentional array with 5 elements
var vehicles = ["Car", "Bus", "Airplane", "Truck", "Motorcycle"]


// function
//function that accepts two arguments: an array and a filter value
function getValue(arr, val) {
    for(var b = 0; b<arr.length; b++) {
        if(arr[b] === val) {
            return arr[b];
        }
    }
}

// Output

console.log("-- DISPLAYING ARRAY ITEMS --");
for (var b = 0; b<vehicles.length; b++) {
    console.log(vehicles[b]);
}

//line space
console.log ("\n");
//display "Car"
console.log ("-- SELECTED VALUE --");
console.log(getValue(vehicles,"Car"));

//line space
console.log ("\n");
//display "Bus"
console.log ("-- SELECTED VALUE --");
console.log (getValue(vehicles, "Bus"));

//line space
console.log ("\n");
//display "Airplane"
console.log ("-- SELECTED VALUE --");
console.log (getValue(vehicles, "Airplane"));

//line space
console.log ("\n");
//display "Truck"
console.log ("-- SELECTED VALUE --");
console.log (getValue(vehicles, "Truck"));

//line space
console.log ("\n");
//display "Motorcycle"
console.log ("-- SELECTED VALUE --");
console.log (getValue(vehicles, "Motorcycle"));



// end program