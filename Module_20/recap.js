/**
 *
 *
 * => Recap Variable / Array / Function / Object / Loop / Condition
 */

const myName = "Hira Khatun";
let age = 22;
var address = "Gazipur";

// array recap
const heroList = [
  "Sakib Khan",
  "Allu Arjun",
  "Mohish",
  "Ram Charon",
  "NTR",
  "Sharuf Khan",
];
console.log(heroList);

// function
function myInfo(name, cgpa) {
  return `My Name is: ${name}. My CGPA is: ${cgpa}`;
}
console.log(myInfo("Hira Khatun", 3.62));

/**
 *
 *
 *
 *
 * JS Object
 */
const person = {
  name: "Abdur Rahim",
  occupation: "WordPress Web Designer",
  drean: [
    "In 2023, buy a car for my Abbu",
    "In 2025, go to the hazz",
    "In 2030, I will make 30,000/= employee workplace. Inshallah",
  ],
};

console.log(person);

/***
 *
 *
 *
 * JS Loop
 */
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let index = 0;
while (index <= 5) {
  console.log(index);
  index++;
}

/***
 *
 *
 *
 * JS Condition
 */

let myAge = 20;
if (myAge >= 18) {
  console.log("You are able to Marriage 🚀🚀🚀");
} else {
  console.log("You are not elagable to Marriage.");
}
