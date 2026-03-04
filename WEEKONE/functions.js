//Function method 1
function greet(){
    console.log('Hello From The Other Side Parvin')
}

//Function method 2
let greet2=function(){
    console.log('Hello from The Other Side Rulz');
}

//Function method 3
function greet3(userName){
    console.log('Hello,' + userName);
}

//We are calling the function greet
greet();
greet2();
greet3('Tusiime');
greet3('Andrew');
greet3('Proscovia');
greet3('Bridget');

//Functions with numbers
function add(a,b){
    return a+b;
}
let sum=add(484950,242130);
let sum2=add(33345,22593);
console.log(sum);
console.log(sum2);

//Subtraction
function subtract(x,y){
    console.log(x-y);
}
subtract(89,42);