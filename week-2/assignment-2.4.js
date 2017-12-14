var header = require('../header.js'); 
console.log(header.display("Ashlee", "Correll", "Exercise 2.4")); 
console.log("\n");

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...
function fullName(first,last) {
    return first+" "+last;
    
}

function dateWriter(year, month, day) {
        return year+"-"+month+"-"+day;

}

function formatNumber() {

}

function convertToInt() {

}

function convertToFloat() {

}

// output 
"Hello my name is"+console.log(fullName(Ashlee,Correll))+"!"; 




// end program 