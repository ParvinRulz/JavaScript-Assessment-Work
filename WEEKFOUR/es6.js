/* */
//Destructuring
let colors = ["blue", "red", "yellow","blue", "red", "yellow"];

let [first, second] = colors; //OR let [first, ... others] = colors;
console.log(first);

let person = {
    name: "Alpha",
    age: 20
}

let {name} = person;

//Two JavaScript files speaking with eachother/modules
//Common JS
/*ES6 modules - new way
import and export*/
const PI = 3.14;
function add (a, b) {
    return a + b
}