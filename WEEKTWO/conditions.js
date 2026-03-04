console.log("vehicle arrives");
console.log("calculate fee");
console.log("print receipt");
//Control flow structures, these are;
//Decisions/Conditional statements

//This is an if statement
let hoursParked = 2;
if (hoursParked < 3) {
  console.log("Apply short pay fee.");
}

//Tenary operator
let hoursParked1 = 3;
//Condition ? expressionIfTrue : expressionIfFalse;
let fee = hoursParked < 3 ? 2000 : 3000;
console.log(fee);

//Another example operator:
let eligibility;
let age = 20;
if(age > 18) {
    eligibility = "You can vote"
} else {
    eligibility = " You are not eligible to vote yet"
}
//If turned into a tenary operator, then:
//age >= 18 ? eligiblility = "You can vote.": eligibility = "You are not eligible to vote";


//This is an if/else statement
let vehicleType = "Truck";
if (vehicleType === "Truck") {
  console.log("Charge 5000");
} else {
  console.log("Pay 3000");
}

//This is an else-if statement
let vehicleType1 = "Taxi";
if (vehicleType === "Truck") {
  console.log("Charge 5000");
} else if (vehicleType1 === "Taxi") {
  console.log("Pay 4000");
} else {
  console.log("Pay 3000");
}
//Switch statement - it's a cleaner and alternative for else-if
let vehicleType2 = "Taxi";
switch (vehicleType2) {
  case "Truck":
    console.log("Pay 5000");
    break;
  case "Taxi":
    console.log("Pay 5000");
    break;
  case "Boda Boda":
    console.log("Pay 2000");
    break;
  default:
    console.log("Unknown Vehicle type");
}

function calculateFee(vehicleType, hoursParked) {
    if (hoursParked < 3) {
        console.log("Pay 2k");
} else {
    switch (vehicleType) {
  case "Truck":
    console.log("Pay 5000");
    break;
  case "Taxi":
    console.log("Pay 5000");
    break;
  case "Boda Boda":
    console.log("Pay 2000");
    break;
  default:
    console.log("Unknown Vehicle type");
}
}
}
calculateFee("Coaster", 1)

let number = prompt("Enter a number")
switch (true) {
  case number > 0:
    alert("Number is positive");
    break;
  case number === 0:
    console.log("The number enetered is a zero");
    break;
  case number < 0:
    console.log("The number is negative");
    break;
  default:
    console.log("Not a number");
}
//syntax for if statement: 
// if(condition) {code runs if the condition is true}

//syntax for if  else statement: 
// if(condition) {code runs if the condition is true} else{The code runs if the condition is false}

//syntax for else-if statement: 
// if(condition) {code runs if the condition is true} elseif{Another condition to check} else{Runs if both are true}

//syntax for switch
/*switch(case value) {
  case conditon:
    if true;
    break;
    default
}
    */



//Repetition/Loop
//It's about doing things multiple times

//Conditional Logic
