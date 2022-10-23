/**
 * In this file I will learn JS Math
 */

// PI
const pi = Math.PI;
console.log(pi);

console.log(Object.keys(Math));

console.log(Math.E);
console.log(Math.LN10);
console.log(Math.SQRT2);

console.log(Math.round(2.5)); // return X rounded the nearest integer
console.log(Math.ceil(2.01)); // return X rounded up to it's nearest integer
console.log(Math.floor(3.9)); // return X rounded down to it's nearestr integet
console.log(Math.trunc(6.796)); // return the integer part of X

// math Power
console.log(Math.pow(2, 4)); // return 2*2*2*2 = 16

console.log(Math.sqrt(64)); // return the root of 64 which is 8

console.log(Math.abs(-26)); // the abs() method always return (positive) value

// Math.sin(x) return the sin number of x (it's between -1 to 1)
console.log(Math.sin((45 * Math.PI) / 180));

// JS can return the max and min value of multiple number
console.log(Math.max(10, 20, 39, 478));
console.log(Math.min(10, 20, 39, 478));

// JS can provide random number from 0 to 1
console.log(Math.random());

// if you want the random number to 0 to 100 then simplly multiply it's 100
console.log(Math.round(Math.random() * 100));

// use temporaty variable
let a = "Rakel";
let b = "Dina";
console.log(a, b);

let temp = a;
a = b;
b = temp;
console.log(a, b);

let x = 26;
let y = 36;
console.log(x, y);

// let's replace the variable with destractring
[x, y] = [y, x];
console.log(x, y);

/***
 *
 *
 * Wtite a number that's return the max number of 3 number
 *
 * let's see the number is 40, 20, 50
 */
function hightNumber(...numbers) {
  let max = 0;
  let min = 0;
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (min > numbers[i]) {
      min = numbers[i];
    }
    total += numbers[i];
  }

  return `The maximum number is: ${max} The minmum number is: ${min} the total is: ${total}`;
}
const maxNumberIs = hightNumber(30, 50, 0, 20, 51, 700, 70, -21);
console.log(maxNumberIs);
