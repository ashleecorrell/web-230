/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   2 December 2017
; Modified By: Ashlee Correll
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Ashlee";
var myLastName = "Correll";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

var firstName;
var lastName;
var street;
var city;
var state;
var pay;
var hireDate;

firstName = "Emily";
lastName = "Swanson";
street = "4101 South Buffalo";
city = "Lincoln,";
state = "NE,";
pay = "10";
hireDate = "03/14/2014";

var employeeInfo = "\nFirst Name: " + firstName 
+ "\nLast Name: " + lastName 
+ "\nAddress: " + " " + street + " " + city + " " + state 
+ "\nPay Rate: " + "$" + pay 
+ "\nHire Date: " + hireDate;


console.log(employeeInfo)

firstName = "Jack";
lastName = "Larson";
street = "5967 Front Street";
city = "New York,";
state = "NY";
pay = "10.5";
hireDate = "09/23/2012";

var employeeInfo = "\nFirst Name: " + firstName 
+ "\nLast Name: " + lastName 
+ "\nAddress: " + " " + street + " " + city + " " + state 
+ "\nPay Rate: " + "$" + pay 
+ "\nHire Date: " + hireDate;


console.log(employeeInfo)

firstName = "Mark";
lastName = "Smith";
street = "4586 Park Place";
city = "Omaha,";
state = "NE";
pay = "9.5";
hireDate = "12/21/2016";

var employeeInfo = "\nFirst Name: " + firstName 
+ "\nLast Name: " + lastName 
+ "\nAddress: " + " " + street + " " + city + " " + state 
+ "\nPay Rate: " + "$" + pay 
+ "\nHire Date: " + hireDate;


console.log(employeeInfo)

firstName = "Megan";
lastName = "O'Conner";
street = "22 Lawrence Ave.";
city = "Houston,";
state = "TX";
pay = "9";
hireDate = "05/18/1999";

var employeeInfo = "\nFirst Name: " + firstName 
+ "\nLast Name: " + lastName 
+ "\nAddress: " + " " + street + " " + city + " " + state 
+ "\nPay Rate: " + "$" + pay 
+ "\nHire Date: " + hireDate;


console.log(employeeInfo)

firstName = "Joe";
lastName = "Dawson";
street = "4927 E. P St.";
city = "Omaha,";
state = "NE";
pay = "10.5";
hireDate = "01/21/1992";

var employeeInfo = "\nFirst Name: " + firstName 
    + "\nLast Name: " + lastName 
    + "\nAddress: " + " " + street + " " + city + " " + state 
    + "\nPay Rate: " + "$" + pay 
    + "\nHire Date: " + hireDate;


console.log(employeeInfo)


// end of program