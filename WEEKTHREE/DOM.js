/*There are five things that JavaScript does for us.
C-Creating elements document.createelement
R-Reading elements
U-Updating elements
D-Deleting elements
R-Responding and listening to events
Everything you capture from html should be at the top of the file.*/

let button = document.getElementById("myButton");
let paragragh = document.getElementById("para");
let allTitles = document.getElementsByTagName("h1");
paragragh.textContent = "Hello World!";
console.log(allTitles.length);

for(let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i].textContent);
}
button.addEventListener('click', function() {
    alert("Button was clicked!");
});
/*submit captures the whole form.
click captures only something small.*/
