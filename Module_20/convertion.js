/***
 *
 *
 * In this file i will learn some conversion with function
 */

function inchToFeet(inch) {
  const feet = inch / 12;
  const isFlatFeet = inch % 12;
  if (isFlatFeet === 0) {
    return feet;
  } else {
    return parseFloat(Math.floor(feet) + "." + isFlatFeet);
  }
}
let dada = inchToFeet(32);
console.log(dada);

/**
 *
 *
 * Mile to Kilomiter
 */

function mileToKilomiter(mile) {
  const kilomiter = mile * 1.60934;
  return parseFloat(kilomiter.toFixed(2));
}

let kilomiterIs = mileToKilomiter(1);
console.log(kilomiterIs);
