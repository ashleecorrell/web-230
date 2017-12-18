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
function fullName() {
    return "Ashlee Correll";
    
}

function dateWriter() {
    return new Date().toLocaleDateString();

}
var n = 65.586;
function formatNumber(n) {
    return (n.toFixed(1));

}
var age = "26.6"
function convertToInt() {
    return (parseInt(age));

}
var money = "200.98"
function convertToFloat() {
    return (parseFloat(money));

}

// output
console.log ("Hello my name is "+fullName()+"!")
console.log ("Todays date is "+dateWriter()+ " and the temperature outside is "+ formatNumber(n)+".")
console.log ("I am "+convertToInt()+" years old and my savings account goal is "+convertToFloat()+".")

// end program 