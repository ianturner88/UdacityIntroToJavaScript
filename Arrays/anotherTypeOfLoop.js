/*
Directions:
Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
Remember that the "Test Run" button will display any logged content, so feel free to use console.log() to test your code.
*/

/* 
EXAMPLE:
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element){
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)
*/


let test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

function isDivisibleByThree (item, index, arr) {
    if ((item % 3) === 0) {
        arr[index] = item * 100;
    }
}