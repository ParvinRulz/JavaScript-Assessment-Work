// First category of operators is arithmetic/mathematical operators.
// These are +, -, *(multiplication), /, %(remainder)

let hoursParked = 4;
let hourlyFee = 2000;
let totalFee = hoursParked * hourlyFee;
console.log(totalFee)

//The assignment operators
/*total = b
total = total + b           total += b
total = total - b           total -= b
total = total * b           total *= b
total = total / b           total /= b
total = total % b           total %= b
total = total ** b          total **=b */
// The equal sign means assigning hence called the assignment operator

//Comparison operator - are for decision making
//== - loosely equal operator
//=== - strictly equal operator
console.log(5 == "5") //True
console.log(5 === "5") //False

//>, <, <=, >=, !=, 
console.log(hoursParked < 5)

//Logical operators ie &&(and), ||(or), !(not)
//userName === "Admin" && password === 12345
//let vehicleType ="Taxi" || vehicleType = "car";
//console.log(vehicleType)

//Increment and decrement operators ie ++ and --
//They can only be pre or post
let count = 0;
console.log(count++) 
console.log(count)
let likes = 0;
console.log(likes++)
console.log(likes)
console.log(likes--)
console.log(likes)

