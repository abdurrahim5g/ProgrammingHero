/**
 *
 * Comparison Operator
 * ===================
 *
 * => What comparison actually do?
 * => The comparison operator test the [true, false] and return something depent on the compare
 *
 * Let's try some compare with comperison operator
 */

var x = 10;
console.log(x == 10); // return true
console.log(x == 8); // return false

// let's try another example
console.log(x == "10"); // return true
console.log(x === "10"); // return false
// => [==] are just check the value that's why 10 == "10" are true
// => But [===] check the value and data typr that's why it's return false.

var age = 20;
console.log(age != 18); // return true
console.log(age != "18"); // return true

console.log(age > 22); //  return false
console.log(age < 22); //  return true

console.log(age >= 18); // return true
console.log(age <= 18); // return false

/**
 * We check those comparison operator [ ==, ===, !=, !==, >, <, >=, <=]
 */
const money = 150000;
let text = "You can't make a buildings";
// store value with condetion
if (money >= 100000) text = "Now you can start the buildings";
console.log(text);

/***
 *
 * Let's try the logical operator [ && -> || -> ! ] those three are logical operator
 */

var myAge = 20;
console.log(myAge > 18 && myAge <= 27); // return true

console.log(myAge > 25 || myAge < 18); // return false

console.log(!5 == 5); // return false
