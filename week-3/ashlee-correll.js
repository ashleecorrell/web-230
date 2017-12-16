var header = require('../header.js'); 

console.log(header.display("Ashlee", "Correll", "Exercise 3.2")); 
console.log("\n");

var header = require('../header.js');

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
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

// six (6) test variables 
    var air = "Airplane";
    var truck = "Truck";
    var bike = "Bike";
    var bicycle = "Bike";
    var car = "Car";
    var train = "Train";



// Output from the match() function... 
console.log(match("A", "B"));
console.log(match(2, 2));

// Conditional "if...else" statements. Include checks for all six (6) test variables 


//output should be "airplane and truck do not match!" but I am getting "Airplane and Truck do match!"
if (match(air,truck)){
    logMatch(air,truck);
} else {
    logMismatch(air,truck);
}

if (match(truck,bike)){
    logMatch(truck,bike);
} else {
    logMismatch(truck,bike);
}

if (match(bike,bicycle)){
    logMatch(bike,bicycle);
} else {
    logMismatch(bike,bicycle);
}

if (match(bicycle,car)){
    logMatch(bicycle,car);
} else {
    logMismatch(bicycle,car);
}

if (match(car,train)){
    logMatch(car,train);
} else {
    logMismatch(car,train);
}

if (match(train,air)){
    logMatch(train,air);
} else {
    logMismatch(train,air);
}

  








// end program