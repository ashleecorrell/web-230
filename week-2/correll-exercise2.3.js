
var header = require('../header.js');

console.log(header.display("Ashlee", "Correll", "Exercise 2.3")); 
console.log("\n");
 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.ashleeCorrell = "Ashlee Correll";

// function 
function myName() {
    return myName.ashleeCorrell
    
}

// output 
console.log("Hello my name is "+myName()+"!"); 





// end program