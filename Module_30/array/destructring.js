/**
 *
 *
 * In this file i will destructuting array and object
 */

const marks = [70, 98, 50, 60, 40, 60];
const [bangla, math, history, ...rest] = marks;
console.log(marks);
console.log(bangla, math, history, rest);

const studentInfo = {
  name: "Abdur Rahim",
  roll: 26,
  sClass: 3,
  address: {
    city: "Jessore",
    state: "Khulna",
  },
  friends: ["Rony", "Rashed"],
  phone: true,
};
const { name, roll, sClass, address, ...others } = studentInfo;

console.log(studentInfo);
console.log(name, roll, sClass, address, others);
console.log(others);
