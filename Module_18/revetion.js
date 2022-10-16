/**
 * In This file I will revesion the JS basic think
 * Like => Variable, Data Type, Array, Condetion
 */

// What is variable?
// => A variable is a name or container, that can contain data -> like -> Number / string / boolean / array -- etc
// Some variable example;

var myAge = 21;
let address = "Jessore";
const name = "Abdur Rahim";

/**
 * What is Data Type in JS?
 *
 * => In JS have 5 basic or Premative DataType. The type of data are [ string, number, boolean, undefine, null ]
 * Data Type example in bottom
 *
 */

let str = "Abdur Rahim";
let num = 26;
let boo = true;
let und;
let nul = null;

console.log(typeof und);
console.log(typeof nul);

/**
 *
 * What is Array in JS?
 *
 * => IN JS Array is a single variable that can contain multiple value in a single variable.
 * => It is often use when you want to access multiple value by a single variable.
 *
 * Let's see the JS Array Example
 *
 */

const userDetails = [
  "Abdur Rahim",
  21,
  "Jseeore",
  "Coading",
  "Web Devalopment",
];

console.log(typeof userDetails);

/**
 *
 * What is condition in JS?
 *
 * => JS condetion is a statement that can perform according to the condition.
 *
 * JS condetion example.
 */
const merageAge = 20;

// if (merageAge >= 21) {
//   return true;
// } else {
//   return false;
// }
const isAdult = merageAge >= 21;

console.log(isAdult);

/**
 * Let's try to debug the JS Code
 */
const isEmployee = true;
if (isEmployee) {
  console.log("You can access in the office room!");
} else {
  console.log("You can't access on the office room!");
}

/**
 * Let's debug in loop
 */

let capital = 0;
while (capital <= 10) {
  console.log(capital);
  capital++;
}

/**
 * Get all even number from 0 to 100
 */
let number = 0;
let evenNumber = [];
while (number <= 100) {
  evenNumber.push(number);
  number += 2;
}
console.log(evenNumber);
