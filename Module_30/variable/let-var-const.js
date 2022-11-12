/**
 *
 *
 * In this file i will learn JS variable diffrence
 *
 */

// the main problem on var keyword => You can redeclear the same name variable that is the problem for Program
var myName = "Abdur Rahim";
var myName = "Abdur Rahman";
console.log(myName);

// let => The best thing about let you can't redeclear the same name variable with let But you can reasign;
let address = "Jessore";
address = "Keshabpur";
// let address = "Keshablpur";
console.log(address);

// const => You can't reasign or redeclear const variable but you can update const variable
const father = "Shofiqul Islam";
// const father = " "; => Not Allow
// father = " "; => Not Allow
console.log(father);

const friends = ["Abdur Rahman", "Masudul Islam", "Riajul"];
console.log(friends);
friends.push("Rayhan"); // update are allow
friends.push("Mohesin"); // update are allow
console.log(friends);

/**
 *
 *
 * Always best practice is Declear a variable with [const] if needed to reasign then use [let]
 */
