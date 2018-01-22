var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 6.2")); 
console.log("\n");

/*
Title: Exercise 6.2

Author: Richard Krasso

Date: 20 January 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about try/catch/finally
*/

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program
//throw an error
try {
    var x = 1
    var y = 2

    var sum = x/y;
    if (sum<1) throw "Sum is Less than 1";

    console.log(sum);
    
//catch and display the error
} catch (err) {
    console.log("Catch clause: " + err);

} finally {
    console.log("Finally clause: End of program...");

}

// end program

