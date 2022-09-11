/***
 *
 * What is Array?
 *
 * Array => Array is like a variable but array can contain multiple data in one variable.
 *
 * -> Let's try with array.
 */

// first look the variable.
const myName = "Abdur Rahim";
const myAge = 20;
const address = "Jessore";

// now you can access all the data with those variable
console.log(myName);
console.log(myAge);
console.log(address);

// Let's look an Array.
const person = ["Abdur Rahim", 20, "Jessore"];

// you can see all data in one variable, And this is array
// How to get array data?
console.log(person[0]); // you can access array data with index, And index start with [0]

// how to check how many data in one array?
console.log(person.length); // return 3;

// how to check the array element position
console.log(person.indexOf("Jessore")); // return 2;

// how to check a single element exist or not in the array.
console.log(person.indexOf("something")); // return -1;
// if Array.indexOf() return -1 then the value isn't exist. if return 0 or higher then the element exist on the array.

/**
 *
 *
 *
 * How to get, set, Array value
 *
 */

const car = ["YEMAHA", "V4", 500000, 2017, 45];

// get array value with index => Array[index]
console.log(car[0]); // return YEMAHA;

// How to set array value => Array[index] = value
car[1] = "V4M"; // set index 1 value to "V4M"

console.log(car);

/***
 *
 *
 * Add or Remove array element
 */

const subjects = []; // empty array
console.log(subjects);

// let's add some data into 'subjects' array
subjects.push("Bangla");
subjects.push("Math");
subjects.push("English");
subjects.push("Religion");
subjects.push("Physic");
subjects.push("Social");

// let's get the array after adding some element
console.log(subjects);
// [ 'Bangla', 'Math', 'English', 'Religion', 'Physic', 'Social' ]

// let's remove some array value
subjects.pop(); // remove last element
console.log(subjects);
// [ 'Bangla', 'Math', 'English', 'Religion', 'Physic']
