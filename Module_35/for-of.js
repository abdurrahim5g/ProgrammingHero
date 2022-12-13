/**
 *
 *
 * In this file i will learn for of with object { }
 */

const person = {
  name: "Abdur Rahim",
  address: {
    village: "Sujapur",
    city: "Jessore",
  },
  fathersName: "Shofiqul Islam",
  mothersName: "Anoyara Begum",
};
// console.log(person);

// [for in ]  => for in loop use for Object
for (const p in person) {
  //  console.log(p, person[p]); // with [for in] you can only get the object key
}

// [for of] => Loop use for array -> but you can use for of with Object with a little tricks
for (const [k, value] of Object.entries(person)) {
  console.log(k, value);
}
