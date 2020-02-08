/* 
Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

let laugh = function(number) {

    //a string
    let ha = "ha";
    let Alex;
    //outputs the numbers of "ha"
    for (let counter = 0; counter < number; counter++) {
        Alex += ha;
    }

    return Alex;
}

console.log(laugh(1));