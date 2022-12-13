/**
 *
 *
 * In this file i will learn some JS Default Paramiter and method
 */

const student = {
  name: "Abdur Rahim",
  age: 21,
  address: {
    district: "Jessore",
    posiceStation: "Keshabpur",
    postOffice: "Keshabpur",
    village: "Sujapur",
  },
  course: ["Web Development", "Apps Development"],
  mission: "Become a senior programmer at the age of 25",
  studentInfo: function () {
    return `${this.name} from ${this.address.district}`;
  },
};
console.log(Object.keys(student)); // return all first label keys

console.log(Object.values(student)); // return all first label values

console.log(Object.entries(student)); // return an array with [key, value] pairs

/**
 *
 *
 * Object seall and freeze
 */
const person = {
  name: "Abdur Rahim",
  age: 21,
  address: {
    parmanentAddress: {
      city: "Jessore",
    },
    presentAddress: {
      city: "Dhaka",
    },
  },
};

console.log(person);
Object.seal(person);
person.age = 23; // possible to updated
delete person.age; // don't work this because this is already Seal => You can only Update this
person.attitude = "Honest"; // you can't add anything in person => because it's already [sealed]

console.log(person);

/**
 *
 *
 * Let's
 */
const driver = {
  name: "Shofiqul Islam",
  address: "Keshabpur, Jessore, Khulna",
  carNo: "204027",
};
console.log(driver);
Object.freeze(driver); // if you freeze an object you can't [ Update, delete, add ] new property and method

delete driver.carNo;
driver.address = "Dhaka";
driver.habits = ["He read Quran"];

console.log(driver);
