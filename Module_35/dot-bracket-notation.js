/**
 *
 *
 *
 * In this file i will learn what is DOT & Bracket Notation
 * And how to use those things in JS
 */

const village = {
  name: "Sujapur",
  population: 2055,
  area: "20000 SQ Feet",
  mainBusiness: "Fish",
};

console.log(village.name); // if you access any object properties with [dot .] => Then it's called Dot notation
console.log(village["population"]); // if you access any object with [] => then it's called Bracket Notation

/**
 *
 *
 * You can use bracket notation as a variable => Like below
 */
const area = "area";
console.log(village[area]);
