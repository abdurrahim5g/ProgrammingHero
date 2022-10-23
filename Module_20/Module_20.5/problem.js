/**
 *
 *
 * Celsius  to Fahrenheit
 *
 * The formula is => (9/5)*C + 32;
 */
function celsiusToFahrenheit(celsius) {
  return 1.8 * celsius + 32;
}
const todayTemp = celsiusToFahrenheit(10);
console.log(todayTemp);

/**
 *
 *
 * Fahrenheit to Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
const todayTemprature = fahrenheitToCelsius(50);
console.log(todayTemprature);

/**
 *
 *
 * Simple interest principal
 */
function simpleInterest(initialAmmount, anualRateOfInterest, time) {
  return initialAmmount + ((initialAmmount * anualRateOfInterest) / 100) * time;
}
const afterOneYear = simpleInterest(1000, 10, 10);
console.log(afterOneYear);

/**
 *
 *
 * Complex Interest principal
 */
