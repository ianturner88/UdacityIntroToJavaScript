/* 
In the Harry Potter novels, children attending the Hogwarts School of Witchcraft and Wizardry belong to one of four houses: Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Each year, the houses assemble a Quidditch team of seven players to compete for the coveted Quidditch Cup.

Consider the following array.

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
Directions:
Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
*/

let team = ["Oliver Wood", "George Weasley", "Fred Weasley", "Harry Potter"];

function isEnough(team) {
    /*checks if the array has at least 7 elements*/

    if (team.length >= 7) {
        /*the array has at least 7 elements*/
        return true;
    }

    /*the array has less than 7 elements*/
    return false;
}

console.log("Hogwarts");
console.log(isEnough(team));