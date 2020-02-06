let balance = 10;
let isActive = true;
let checkBalance = true;

if (checkBalance === true) {
    if ((isActive === true) && (checkBalance > 0)) {
        document.write("Your balance is $" + balance + ".");
    } else if (isActive === false) {
        document.write("Your accoutn is no longer active.");
    } else if (balance === 0) {
        document.write("Your account is empty");
    } else {
        document.write("Your balance is negative. Please contact bank.");
    }
} else {
    document.write("Thank you. Have a nice day!");
}