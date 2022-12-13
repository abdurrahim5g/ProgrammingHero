/**
 *
 * In this file i will declear object with 5
 */

// object literals
const person = {
  personName: "Abdur Rahim",
  age: 21,
  occupation: "Freelancer",
};
console.log(person);

// object class
const objectClass = new Object({
  name: "yeasin",
  address: "Keshabpur",
});
console.log(objectClass);

// create object with function
function makeObject(name, age, address) {
  return { name: name, age: age, address: address };
}
const newPerson = makeObject("Abdur Rahim", 21, "Jessore");
console.log(newPerson.name);

// make object with create object
const carDetails = {
  name: "Totota",
  release: 2022,
  model: "Fortuner",
  brand: "TATA",
  carInfo: function () {
    return `${this.model} by ${this.brand}`;
  },
};
const carMethod = Object.create(carDetails);
console.log(carMethod.carInfo());

/**
 *
 *
 * Create or Declear a object by class
 */

class Student {
  constructor(
    id,
    name,
    address,
    fathersName,
    mothersName,
    classPostion,
    experties = ""
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.fathersName = fathersName;
    this.mothersName = mothersName;
    this.classPostion = classPostion;
    this.experties = experties;
  }

  studentInformation() {
    return `
        ID: ${this.id}
        Name: ${this.name}
        classPositon: ${this.classPositon}
        experties: ${this.experties}
    `;
  }
}

const student1 = new Student(
  26,
  "Abdur Rahim",
  "Jessore",
  "Shofiqul Islam",
  "Anowera Begum",
  13,
  "Web Developer"
);
console.log(student1.studentInformation());
