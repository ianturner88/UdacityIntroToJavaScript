/*
Directions:
Write a while loop that:

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number
*/

let x = 0;

while (x < 21) {
    if (((x % 3) === 0) && ((x % 5) === 0)) {
        document.write("JuliaJames/n");
    } else if ((x % 3) === 0) {
        document.write("Julia/n");
    } else if ((x % 5) === 0) {
        document.write("James/n");
    } else {
        document.write(x + "/n");
    }
    x++;
}