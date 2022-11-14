/**
 *
 *
 * In this file i will learn Optional chain nasted object
 */
const person = {
  name: "Abdur Rahim",
  address: "Jessore",
  occupation: "Freelancer",
};

console.log(person?.name); // in this line [?] is a optional chain if the value isn't there then return undefine...
console.log(person.address?.city); // undefine
console.log(person.parmanentAddress?.city); // undefine
console.log("");

/**
 *
 *
 * Nasted Object
 */
const empeloyee = {
  eID: 6330,
  name: "MD Rayhan",
  title: "Marketing Officer",
  team: "Mearkating Team",
  address: {
    village: "Banapol",
    policeStation: "Sarsha",
    district: "Jessore",
    divition: "Khulna",
  },
  leader: {
    name: "Md Riajul",
    post: "Head of marketing",
  },
};
console.log(empeloyee.address.village); // get object with dot notation
