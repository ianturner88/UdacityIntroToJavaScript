/*
START: 
99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!

END:
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
*/

let number = 99;

while (number > 0) {
    //print sentence
    console.log(number + " bottles of juice on the wall! " + number + " bottles of juice! " + "Take one down, pass it around... " + (number - 1 ) + " bottles of juice on the wall!");
    //decrement counter
    number--;
}