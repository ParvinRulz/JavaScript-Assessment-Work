/*for(initialExpression; conditions; updateExpression) {
    Loop Body
} */
for(let x = 0; x < 3; x++) {
    let name = "Parvin Rulz";
    console.log(`Hi my name is ${name}`)
}
for(let x = 2; x <=5; x++) {
    console.log(x)
}

//This one prints even numbers
for(let x = 2; x <=10; x = x + 2) { // You can use x+2
    console.log(x)
}

let parkingLot =["UBZ 234F", "UAY 435D", "UBD 234S"]
//console.log(parkingLot.Length)

//How to get item in position one, parkinglot[0]
for(y = 0; y < parkingLot.length; y++) {
    console.log(parkingLot[y])
}

//The for of loop()
for(let numberPlate of parkingLot) {
    console.log(numberPlate)
}

//While loops
let x = 0;
while(x <= 5) {
    console.log(x);
    x++;
}

//Do-while loop
let paymentReceived = false;
do {
    console.log("Confirming payment......")
    paymentReceived = true;
} while(!paymentReceived)

    let number1 = 0;
    do {
        console.log(number1)
        number1++
    } while(number1 <=5)
