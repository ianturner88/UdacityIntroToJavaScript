/* 
Directions:
Use the map() method to take the array of bill amounts shown below, and create a second array of numbers called totals that shows the bill amounts with a 15% tip added.

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
Print out the new totals array using console.log.

TIP: Check out the toFixed() method for numbers to help with rounding the values to a maximum of 2 decimal places. Note, that the method returns a string to maintain the "fixed" format of the number. So, if you want to convert the string back to a number, you can cast it or convert it back to a number:

Number("1");
Returns: 1
*/

let bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

console.log("START bills");
console.log(bills);

let billsWithTip = bills.map(function(bill) {
    /* Multiply the initial bill with 15% */
    let total = bill * 1.15;
    //truncate to only 2 decimal spots
    total = total.toFixed(2);
    //store result
    return total;
}) 

console.log("END bills");
console.log(billsWithTip);

/*
Hey all, Monday (17th) is Family Day, so MEC is closed. Coyote is still open, however. Jamie and I will be at Coyote at noon... hope others can make it out :)

*I'll repost this on Sunday, but just wanted to post it now, in the event people are planning their loong weekends early.

*/