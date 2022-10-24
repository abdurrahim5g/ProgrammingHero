/**
 *
 * In this file I will learn typeof
 */

const myName = "Abdur Rahim";
const age = 20;
const isDeveloper = true;
const info = ["Abdur Rahim", 20, "Web Developer"];
const details = {
  name: "Abdur Rahim",
  age: 20,
  dream: "1,00,000/= Job place in 2030",
};

function fullName() {
  return "Abdur Rahim";
}

console.log(typeof myName);
console.log(typeof age);
console.log(typeof isDeveloper);
console.log(typeof info); // info is an array but it's return object,, Try the best way to check an array
console.log(typeof details);
console.log(typeof fullName);

// best way to check an array
console.log(Array.isArray(info)); // return true
