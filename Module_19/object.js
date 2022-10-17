/**
 *
 * In this file I will learn JS Object
 *
 */

const myMobile = {
  brand: "Samsung",
  model: "A03s",
  launch: 2022,
  ram: "4GB",
  rom: "64GB",
};

console.log(myMobile);

console.log(myMobile.brand); // get object with dot notation
console.log(myMobile["ram"]); // get object with property

let rom = "rom";
console.log(myMobile[rom]); // get object with variable

console.log(Object.keys(myMobile));
console.log(Object.values(myMobile));

function getSingleInfo(key) {
  console.log(`${key} ${myMobile[key]}`);
}

getSingleInfo("model");

/**
 *
 * Make a Uppercase function
 */
function toUpper(char) {
  return char.toUpperCase();
}
console.log(toUpper("hi sir, How are you?"));

/**
 * Make to Lower case
 */
function toLower(char) {
  return char.toLowerCase();
}
console.log(toLower("MY NAME IS ABDUR RAHIM"));
