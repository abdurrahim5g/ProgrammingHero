/***
 *
 *
 *
 * In this file i will learn simple validation in JS
 */

function total(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }
  return "Please input a valid number";
}

console.log(total(3, 5));
