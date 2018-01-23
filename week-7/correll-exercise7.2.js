var header = require('../header.js');
console.log(header.display("Ashlee", "Correll", "Exercise 7.2")); 
console.log("\n");

/*
Title: Exercise 7.2

Author: Richard Krasso

Date: 20 January 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about constructor functions
*/

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

function employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

var employees = [
    new employee("001", "Ashlee", "Correll", "Web Developer"),
    new employee("002", "John", "Snow", "Lord Commander"),
    new employee("003", "J.K.", "Rowling", "Author"),
    new employee("004", "Britany", "Spears", "Singer"),
    new employee("005", "Mary", "Poppins", "Nanny")
];

for (var x = 0; x < employees.length; x++) {
    console.log(employees[x].id +" "+ employees[x].firstName + " " + employees[x].lastName + " " + employees[x].title);
}

// end program