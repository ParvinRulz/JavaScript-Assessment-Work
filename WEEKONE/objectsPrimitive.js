//objects are variables that can both store both values and functions.
//vehicle object

let vehicle={
    driverName:"Ruth",
    vehicleType:"Taxi",
    vehiclePlateNumber:"UB 234M",
    vehicleModel:"Toyota",
    vehicleColor:"Grey",
    isVehicleCheckedIn:true,
    vehicleDateIn:new Date(),
    nin:null,
    greet() {
        console.log("Hello, Welcome to ParkEase")
    }
}

console.log(vehicle.driverName)
console.log(vehicle.vehiclePlateNumber)
console.log(vehicle.greet())
