/*
Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.
*/

// SOLUTION uses nested for loops

for (let rows = 0; rows < 26; rows++) {
    for (let seats = 0; seats < 100; seats++) {
        console.log("row: " + rows + " seat: " + seats);
    }
}