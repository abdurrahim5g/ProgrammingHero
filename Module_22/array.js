/***
 *
 * In this file i will learn some array method
 */
const oldFriend = [20, 30, 40, 29, 48];
const newFriend = [49, 28, 48, 56];
const latestFriend = oldFriend.concat(newFriend);
// console.log(latestFriend, oldFriend, newFriend);

// JS Slice() -> you can slice array without changing the first one
const ages = [20, 30, 40, 29, 48, 49, 28, 48, 56];
const get30To49 = ages.slice(1, 6);
// console.log(ages);
// console.log(get30To49);

// JS Splice() -> with this you can modify the main array
const numbers = [20, 30, 40, 29, 48, 49, 28, 48, 56];
const newNumber = numbers.splice(2, 4);

console.log(numbers);
console.log(newNumber);
