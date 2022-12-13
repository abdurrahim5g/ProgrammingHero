/**
 *
 *
 * In this file i will learn about nasted JS object
 *
 */

const business = {
  companyName: "Developer Point",
  type: "EdTech",
  country: ["Bangladesh", "India", "Napal"],
  isPublic: false,
  founder: "Abdur Rahim",
  coFounders: ["Masudul Islam", "Riajul Islam", "Rayhan", "Abdur Rahman"],
  mission: "Make skilled people in Bangladesh.",
  availableLocation: ["Jessore", "Khulna", "Dhaka", "Rangpur", "Chittagong"],
  weAreAvailable: function () {
    return `We are available in: ${this.country}`;
  },
};
console.log(business.weAreAvailable());

/**
 *
 * Let's make a nasted object for a students
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
};
console.log(student.address);

/**
 *
 * Let's make a nasted object for a employee
 */
const employee = {
  name: "Abu Sayed",
  address: {
    district: "Jessore",
    divition: "Khulna",
    village: "Keshabpur",
    localAddress: "Mojidpur",
  },
  fathersName: "",
  nidNumber: 792633453964,
  employeeID: "Lira 3302",
  jobTitle: "Merkating Officer",
  area: ["Gopalgong", "Khulna"],
  sallery: {
    baseSallery: 20000,
    healthInsurance: 2000,
    roadCost: 7000,
  },
  totalSallery: function () {
    return (
      this.sallery.baseSallery +
      this.sallery.healthInsurance +
      this.sallery.roadCost
    );
  },
};
console.log(employee.totalSallery());
