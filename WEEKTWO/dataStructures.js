let parkers =[{
    driverName: "Parvin",
    numberPlate: "UBX 634D",
    vehicleType: "Lexus",
    hoursParked: 4,
    fee: 5000,
    isSignedOut: true,
    showDetails() {
        console.log(this.driverName + " " + this.numberPlate)
    },
    signOut() {
        console.log(this.driverName + "has been signed out")
    }
}, {
    driverName: "Ham",
    numberPlate: "UBX 644D",
    vehicleType: "Taxi",
    hoursParked: 3,
    fee: 4000,
    isSignedOut: true,
    showDetails() {
        console.log(this.driverName + " " + this.numberPlate)
    },
    signOut() {
        console.log(this.driverName + "has been signed out")
    }
}, {
    driverName: "Proscovia",
    numberPlate: "UBX 664D",
    vehicleType: "Truck",
    hoursParked: 2,
    fee: 6000,
    isSignedOut: false,
    showDetails() {
        console.log(this.driverName + " " + this.numberPlate)
    },
    signOut() {
        console.log(this.driverName + "has been signed out")
    }
}]