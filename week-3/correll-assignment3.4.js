var header = require('../header.js'); 
console.log(header.display("Ashlee", "Correll", "Exercise 3.2")); 
console.log("\n"); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable

var test=0


// for loop


for (var test = 0; test<10; test++ )  {
    if (match(6,test)){
        logMatch(6,test);
    } else {
        logMismatch(6,test);
    } 
}





// while loop

var test = 0
while (test<10){
    if (match(6,test)){
        logMatch(6,test);
    } else {
        logMismatch(6,test);
    } test++;
} 





// Reused functions from exercise-3.2.js

function match(a,b){
    if (a === b){
        return (true);
   } else {
        return (false);
  }}

function logMismatch(a,b) {
    console.log (a+" and "+b+" do not match!");
}

function logMatch(a,b) {
    console.log (a + " and " + b + " do match!");
}


// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}

