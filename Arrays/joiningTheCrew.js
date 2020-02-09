/*
Directions:
In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
*/

/* initial variables */
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

/* initial array */
var crew = [captain, second, pilot, companion, mercenary, mechanic];

/* elements to add to the array */
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// add the three elements to the array
crew.push(doctor, sister, shepherd);

console.log("CREW");
console.log(crew);