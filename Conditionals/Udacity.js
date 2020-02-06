/*
Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4
*/

let musicians = 3;

if (musicians == 1){
    document.write("Solo");
} else if (musicians == 2) {
    document.write("Duet");
} else if (musicians == 3) {
    document.write("Trio");
} else if (musicians == 4){
    document.write("Quartet");
} else{
    document.write("This is a large group");
}