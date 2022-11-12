/**
 *
 *
 * In this file i will learn JS [...Speade] operator
 *
 */

// const max = Math.max(20, 50, 23, 59, 9, 27);
// const min = Math.min(20, 50, 23, 59, 9, 27);
// console.log(max);
// console.log(min);

// // numbers array
// const numbers = [1, 4, 6, 2, 6, 69];
// console.log(numbers);
// console.log(...numbers);

// // get largest number from an array
// const getLargest = Math.max(...numbers);
// console.log(getLargest);

/**
 *
 * How you can copy an array with sprade operator
 */
// const friends = ["Abdur Rahman", "Masudul Islam", "Riajul"];
// const newFriends = friends; // this is wrong way to store of copy a variable because it is get the referance

// friends.push("Rayhan");
// newFriends.push("Rony");

// console.log(friends);
// console.log(newFriends);

/**
 *
 *
 * Actual way to copy a variable
 */

// const subjects = ["Math", "English", "Physics"];
// // const newSubjects = [subjects]; // wrong
// const newSubjects = [...subjects];

// subjects.push("Chamistry");
// newSubjects.push("Digital Marketing");

// console.log(subjects);
// console.log(newSubjects);

// const info = {
//   name: "Abdur Rahim",
//   roll: 3036,
//   address: {
//     city: "Keshabpur",
//     state: "Jessore",
//   },
// };
// console.log(info);
// console.log(...info); // for sad you cant' sprade the object

const car = {
  carName: "Volvo",
  model: "VX-400",
};
console.log(car);
// console.log(...car); // this will not work

const additionalCarInfo = {
  ...car, // this is work
  price: 100000,
  type: "SUV",
};
console.log(additionalCarInfo);
