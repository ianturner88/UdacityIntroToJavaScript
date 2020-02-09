/* 
Directions:
Create an array called udaciFamily and add "Julia", "James", and your name to the array. Then, print the udaciFamily to the console using console.log.
*/

console.log("START");

let udaciFamily = [];

udaciFamily.push("Julia");
udaciFamily.push("James");
udaciFamily.push("Ian");

function printArrayContents(udaciFamily) {
    for (let counter = 0; counter < udaciFamily.length; counter++) {
        //outputs the contents of the array
        console.log(udaciFamily[counter]);
    }
}

printArrayContents(udaciFamily);

console.log("END");