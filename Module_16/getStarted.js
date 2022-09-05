// Get started
console.log("Hello JavaScript!");

/**
 * => How to declear JS Variable -> 4 way to Declear a JS variable
 * 1. var
 * 2. let
 * 3. const
 * 4. nothing means nothing
 */

var myName = "Abdur Rahim";

let address = "Keshabpur Jessore";

const gender = "Male";

age = 21;

// console.log(myName);
// console.log(address);
// console.log(gender);
// console.log(age);

/**
 *
 * What is Operation in JS
 *
 *=> A Operation can do something which developer commend in the operation.
 *   Like [ 7 + 3 = 10 ] this is a simple JS Operation. => Let's try some Operation.
 */

var apple = 120;
var orange = 150;
const totalPrice = apple + orange;
console.log(`Apple and Orange total price is: ${totalPrice}`);

/**
 *
 * Below was done some JS Operation [ Division, Addition, Multiplication, Subtruction, Modulas, etc..]
 */

console.log(100 / 5); // return = 20

console.log(100 + 5); // return = 105

console.log(100 * 5); // return = 500

console.log(100 - 5); // return = 95

console.log(12 % 5); // return = 2

let penPrice = 10;
console.log(penPrice++); // this will return = 10 -> because print the output before increment

console.log(penPrice); // But this will return = 11

/**
 *
 * Learn some Shorthand variable
 */
console.log();
let pattrolPrice = 90;
console.log(pattrolPrice);

pattrolPrice += 45;
console.log(pattrolPrice);

pattrolPrice -= 5;
console.log(pattrolPrice);

/**
 *
 * Learn JS type conversion
 */
console.log();

let myAge = "21.706";
console.log(parseFloat(myAge));

/**
 *
 *
 * How to check JS Data Type
 */
console.log();
var amarName = "Abdur Rahim"; // string
var age = 21; // number
var addredd = "Jessore"; // string
var cgpa = 3.48; // number
var isHappy = true; // boolean
var nothing; // undefined
var kisuNa = null; // object

console.log(typeof amarName);
console.log(typeof age);
console.log(typeof addredd);
console.log(typeof cgpa);
console.log(typeof isHappy);
console.log(typeof nothing);
console.log(typeof kisuNa);

/**
 * Learn number some extra
 */
console.log();
var num1 = 0.1;
var num2 = 0.2;
var totalNum = num1 + num2;

console.log(totalNum.toFixed(1));
