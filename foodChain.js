/*
From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.

Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores
Directions:
Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
undefined if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code.

If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console.

change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = your code goes here

console.log(category);

EXAMPLE:
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

*/

let eatsAnimals = true;
let eatsPlants = true;

let category;

if (eatsPlants === true && eatsAnimals === true){
    category = "omnivore";
} else if (eatsPlants === true) {
    category = "herbivore";
} else if (eatsAnimals === true) {
    category = "carnivore";
}

document.write(category);