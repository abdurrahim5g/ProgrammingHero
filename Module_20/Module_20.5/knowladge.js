/***
 *
 *
 *
 * Learn JS  Knowladge in this tutorial
 */

// function declearation
function myName(name) {
  return `My Name is: ${name}`;
}
console.log(myName("Abdur Rahim"));

// function experation
const whichIsBig = function (a, b) {
  if (a > b) {
    return "First One is big";
  }
  return "Secound one is big";
};
console.log(whichIsBig(4, 2));
console.log(whichIsBig(4, 20));

// arrow function
const totalSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(totalSum([3, 5, 20, 2]));

/***
 *
 *
 *
 *
 * Loop vs Function
 * => Loop is a simply repeatable code block,,, If loop condetion is true then the code will execute.
 * => Function is also a code block which contain single or Multiple statement and
 *    return the right value which developer want.
 *
 */

/**
 *
 * Q=> Array vs Object
 *
 * => Array is simpally a variable that can contain multiple data with [index|value] pairs
 * => Object can contain multiple data with [key|value] pairs
 */

/***
 *
 *
 *
 *
 * Q=> Integer vs Float
 *
 * => A Integer is a number that can't contain (.) like 30, 20, 69 ....
 * => A Float is a number that can contain (.) like this => 20.29, 5.78, 287398.89
 */

/**
 *
 *
 * Q=> what is the diffrent between == and ===
 *
 * => Both (== & ===) The similarity of this, Both are compare tha data,
 *    [==]  -> Compare only value is same or not like (20 == "20") -> is return true; Because both are same
 *    [===] -> Compare value and data type both like (20 === "20") -> return false; Because both data type isn't same.
 */
