/* 
Directions:
James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
but James had this:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

Remove "Blackberry"
Add "Yellow" and "Green"
Add "Purple"
*/

/*
EXAMPLE:
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");
*/

console.log("START");

//colours of the rainbow
let rainbow = ["Red", "Orange", "Blackberry", "Blue"];

//insert requested colours AND remove 'Blackberry'
rainbow.splice = rainbow.splice(2, 0, "Yellow", "Green", "Purple");

console.log(rainbow);

console.log("END");