var header = require('../header.js');

console.log(header.display("Ashlee", "Correll", "Exercise 3.3")); 
console.log("\n");



// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)
var eventKeyCode = 13;

switch (eventKeyCode) {
    case eventKeyCode = 13:
        console.log("The enter key was pressed");
        break; 
    case eventKeyCode = 16:
        console.log("The shift key was pressed"); 
        break;
    case eventKeyCode = 32:
        console.log("The spacebar key was pressed");
        break;
    case eventKeyCode = 8:
        console.log("The backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press"); 
}


// end program 