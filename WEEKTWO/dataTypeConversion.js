//object (not part of dataType conversion)
//This is a constructor function
function Car(make, model, year, arrivalTime) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.arrivalTime = new Date();
    this.isLoggedIn = true;
    this.drive = function() {
        console.log(`You drive a ${this.model}`)
    }
}
let parvinsCar = new Car("Lexus", "suv-lx", 2026);
let proscoviasCar = new Car("Range-rover", "Discovery", 2025);
let glodisCar = new Car("Toyota", "Japan", 2025);
console.log(parvinsCar.make)
parvinsCar.drive()
console.log(parvinsCar.arrivalTime)


//dataTypeConversion begins
//Converstion of datatypes has two ways
Number()
String()
Boolean()
/*function Number(number, string, boolean) {
    this.number = number;
    this.string = string;
    this.boolean = boolean;
}
let number1 = new Number() */
Number(true)
String(true, 5000)
Boolean("Driver Name")