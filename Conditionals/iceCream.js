/*
Directions:
Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:

if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:

I'd like two scoops of __________ ice cream in a __________ with __________.
*/

let flavour = "vanilla";
let vessel = "cone";
let toppings = "peanuts";

if ((flavour === "vanilla" || flavour === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
    document.write("I'd like two scoops of " + flavour + " ice cream in a " + vessel + " with " + toppings + ".");
}