var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 6.3")); 
console.log("\n");

/*
Title: Exercise 6.3

Author: Richard Krasso

Date: 20 January 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about object literals
*/

/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

//create an object literal with three fields

var ticket = {
    id: "H123G2",
    name: "Bus One",
    requester: "Ashlee",


};
//display each field in a string
console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requester: " + ticket.requester + "}")



// end program