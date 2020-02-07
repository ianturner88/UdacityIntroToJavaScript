/*
Directions:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));
Prints: "hahaha!"
*/

/* 
function laugh() {
    let message = "hahahahahahahahahaha!";
    return message;
}
*/

let amount = 3;
function printToScreen (amount) {
    for (let counter = 0; counter < amount; counter++) {
        console.log("ha");
    }    
    console.log("!");
}

console.log(printToScreen(3));