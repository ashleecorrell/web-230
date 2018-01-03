/*
Title: Assignment 4.4

Author: Richard Krasso

Date: 19 December 2017

Modified by: Ashlee Correll

Description: JavaScript coding assignment for filtering out an element in an array
*/

var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Assignment 4.4")); 
console.log("\n");

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program
//Create a one dimensional 5 element array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]

// function that accepts two arguments, an index placeholder and a filterable value
function getStates(arr) {
    for (var s = 0; s < states.length; s++) {
        console.log(states[s]);
    }
}

//function that acceptsa one dimentional array
function getValue(x, value) 
{
    if(x == value)
        return value;

}

// Output
console.log("--Original Array--")
getStates(states);

console.log("--Sorted Array--")
getStates(states.sort());

//invoke the filter method
console.log("--Selected Value--")
console.log(
    states.filter
    (
    function (x)
    {
        return getValue(x, "Iowa")
    }
    )[0]
);



// end program
