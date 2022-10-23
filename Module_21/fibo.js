/**
 *
 *
 * In this file i will learn fibo number
 *
 */

// fibo number looks like 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....
// get all fibonacci number less than 1000

function fibonacci(maxFibo) {
  let x = 0;
  let y = 1;
  for (let i = 0; i < maxFibo; i++) {
    let fn = x + y;
    if (fn > maxFibo) {
      break;
    }
    // console.log(fn, i);
    [x, y] = [y, fn];
  }
}

fibonacci(100);

// get all fabonacci number and push into an array
function getFibonacci(fiboNumber) {
  let fibo = [0, 1];
  for (let i = 0; i < fiboNumber; i++) {
    fn = fibo[i] + fibo[i + 1];
    fibo.push(fn);
  }
  console.log(fibo);
}

getFibonacci(20);
