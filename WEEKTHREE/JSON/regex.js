let pattern = /mercedes/;
let validator1 = pattern.test("this is a mercedes g-wagon");
let validator2 = pattern.test("this is a toyota");
console.log(validator1)
console.log(validator2)
//has  small letters, string, one or more characters
let pattern2 = /^[a-z]+$/
let validator3 = pattern2.test("lexus");
let validator4 = pattern2.test("vitz");
let validator5 = pattern2.test("mark-x");
let validator6 = pattern2.test("Volkswagen");
console.log(validator3, validator4, validator5, validator6)

//Simple email regular expression
let emailPattern1 = /^[a-z]+@+[a-z]+\.+[a-z]$/    //Doesn't cater for numbers and capital letters
let emailPattern2 = /S+@+S+\.+S+/                 //Caters for emails with both letter and number or character but not white space
let emailPattern3 = /^[^\S]$/

//Showing the use of the escape(\)sign.
//1
let sentence = "Alpha said,\"we are the best collegues he has ever had\"";
console.log(sentence)
//Or
let sentence2 = `Alpha said,"we are the best collegues he has ever had."`;
console.log(sentence)
//2
let shoppingList = "this is my shopping list: \n 1.money, \n 2.snacks, \n 3.oner(grapes & apple), \n 4.soda, \n 5.cereal";  //the n tells you to hit enter and move down to the next.
console.log(shoppingList)

let emailPattern4 = /^[^\S@]+@[^\S@]+\.[^\S@]$/    //Omits any white space and @ & email begins and ends with a character
