/**
 *
 *
 * In this file i will chack how async work
 */

let a = 2;
let b = 3;

console.log(a);

setTimeout(() => {
  console.log(a);
});

a = 10;

console.log(b);
