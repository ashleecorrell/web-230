var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 6.4")); 
console.log("\n");

/*
Title: Exercise 6.4

Author: Richard Krasso

Date: 20 January 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about nested objects
*/

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

//create literal "ticket" and nexted literal "person"
var ticket = {
    // ticket properties
    id: "y948",
    name: "Ashlee Correll",
    dateCreated: "08/13/2010",
    priority: "1st Class",
    personId: "117823",
    person: {
        // person properties
        id: "983726",
        firstName: "Ashlee",
        lastName: "Correll",
        jobTitle: "Web Developer",
    }
};

//output the results

console.log ("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName +" (" + ticket.person.jobTitle + ").")


// end program