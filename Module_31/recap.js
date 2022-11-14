/**
 *
 *
 * In this file i will recap Before JS
 */

// var, let, const
var age = 20;
var age = 20;

let address = "Keshabpur";
address = "Jessore";

const myName = "Abdur Rahim";

/**
 *
 *
 * Recap function
 */
function sum(a = 0, b = 0) {
  return a + b;
}
const total = sum(3, 7);
console.log(total);

/**
 *
 *
 * Template stirng || Use variable as inside the string
 */
const totalCost = `Your total cost is: ${total}`;
console.log(totalCost);

/**
 *
 *
 * Arrow Function
 *
 */
const myNameIs = (name) => `My name is: ${name}`;
console.log(myNameIs("Abdur Rahim"));
