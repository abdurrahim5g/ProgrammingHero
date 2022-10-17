/**
 *
 * In this file I will recap variable, loop, condition, array
 */

// Varibale
var isCurrentHear = true;
let yourPrestneAddress = "Sujapur, Keshabpur, Jessore";
const myName = "Abdur Rahim";

// loop => for & while
let totalFirstTenNumber = 0;
for (let i = 0; i <= 100; i++) {
  totalFirstTenNumber += i;
}
console.log(totalFirstTenNumber);

//  now paly with while loop
let odd = 0;
let allOddNumber = [];
while (odd <= 99) {
  allOddNumber.push(odd);
  odd += 2;
}
console.log(allOddNumber);
console.log(allOddNumber.length);

/**
 * Let's play with condition
 *
 */

const getYear = new Date().getFullYear();

if (getYear >= 2023) {
  console.log("Now you must buy a car.");
} else {
  console.log("Be Learning and execute.");
}

/**
 *
 *
 * Play with JS array[]
 */
console.log();
const iWillLearn = ["React", "JS", "Redux", "Figma", "Frontend Development"];

for (let i = 0; i < iWillLearn.length; i++) {
  console.log(`I will Learn ${iWillLearn[i]} in 2022`);
}
