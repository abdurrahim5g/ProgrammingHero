/**
 *
 * In this file i will learn arrow funciton
 */

// ragular function
function sum(a = 0, b = 0) {
  return a + b;
}
console.log(sum(3));

// arrow function
const dauble = (a) => a * 2;
console.log(dauble(50));

// arrow function
const details = (name, occupation, age) =>
  `My name is: ${name}. I am a ${occupation}. My age is: ${age}`;
console.log(details("Abdur Rahim", "Frontend Developer", 20));

// arrow function with return
const fullName = (fName, lName) => {
  const team = "Frontend Developer";
  return `${fName} ${lName}. Team of ${team}`;
};
console.log(fullName("Abdur", "Rahim"));
