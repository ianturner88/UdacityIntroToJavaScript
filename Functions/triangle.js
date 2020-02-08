/* 
Directions:
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 
*/

// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//       line += "* "
//     }
//     return line + "\n";
//   }

//height of the triangle
let length = 10;

function makeLine(length) {
/*prints out triangle as specified in the example*/
    for (let rowCounter = 1; rowCounter < length; rowCounter++) {
        for (let starCounter = 1; starCounter < rowCounter; starCounter++) {
            console.log("*");
        }
    }
}