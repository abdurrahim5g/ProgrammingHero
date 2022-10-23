/**
 *
 *
 * Let's  calculate all array number with funciton
 */

function addAllNumber(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let total = addAllNumber([2, 5, 6, 5, 7]);
// console.log(total);

/**
 *
 *
 *
 *
 * In  this function i will return all odd number in an array
 */

function getOddNumbers(array) {
  let oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumbers.push(array[i]);
    }
  }
  return oddNumbers;
}

let numbers = [2, 7, 8, 5, 8, 22, 40, 60, 77, 103];

// console.log(getOddNumbers(numbers));

/**
 *
 *
 *
 *
 *
 * In this function i will make a factorial
 */

function factorial(num) {
  let factorialResult = 1;
  for (let i = 1; i <= num; i++) {
    factorialResult *= i;
  }
  return factorialResult;
}
// console.log(factorial(4));

/**
 *
 *
 *
 * factorial in revarse way
 */

function factorialInRevarse(num) {
  let factResult = 1;
  for (let i = num; i >= 1; i--) {
    factResult *= i;
    console.log(factResult);
  }
}
// factorialInRevarse(10);

/***
 *
 *
 *
 * What is the total of 64 for each multiple
 */
let startFrom = 1;
for (let i = 1; i <= 64; i++) {
  console.log((startFrom *= 2));
}
