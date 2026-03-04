function welcomeMessage(name) {
    console.log(name + " welcome to refactory")
}
welcomeMessage("Proscovia");

//function declaration
function add(a,b){
    console.log(a + b);
}

//function expression
let add=function(a,b){
    console.log(a + b);
}

//arrow function
let add=(a,b)=>{
    console.log(a + b);
}