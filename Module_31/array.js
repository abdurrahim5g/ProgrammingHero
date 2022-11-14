/**
 *
 *
 * In this file i will learn some array function
 */
const friends = [
  "Masudul",
  "Abdur Rahman",
  "Riajul",
  "Rayhan",
  "Mohsine",
  "Rony",
];
friends.map((friend, index) => console.log(index, friend)); // return all friends

const numbers = [2, 5, 6, 9, 6];
const dauble = numbers.map((n) => n * 2);

console.log(numbers);
console.log(dauble);

const newFriend = friends.map((friend) => friend[0]);
console.log(newFriend);

/**
 *
 * forEach()
 */
const teachers = [...friends];
const newTeacher = teachers.forEach((teacher) => console.log(teacher));

/**
 *
 *
 * Array filter()
 */

const subjects = [
  "Math",
  "Physic",
  "English",
  "Digital",
  "history",
  "history",
  "Math",
];
const getMath = subjects.filter((subject) => subject == "Math");
console.log(getMath);

const newNumbers = [3, 6, 7, 9, 29, 10, 49, 1, 0, 29, 49, 78];
const largerTen = newNumbers.filter((number) => number >= 10);
console.log(largerTen);

/**
 *
 * Array.find()
 * => Find return only first element which is return true
 */
const findTen = newNumbers.find((number) => number >= 10);
console.log(findTen); // return 29

/**
 *
 *
 * Array.reduce()
 *
 */
const someNumbers = [3, 6, 7, 9, 29, 10, 49, 1, 0, 29, 49, 78];
const total = someNumbers.reduce((prev, current) => prev + current);
console.log(total);
