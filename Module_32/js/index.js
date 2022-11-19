/**
 *
 *
 * Learn JS API
 *
 */

const persone = {
  name: "Abdur Rahim",
  roll: 30,
  address: "Jessore",
};
// console.log(persone);

// with help of JSON.stringify(object) => You can make any object to JSON String
const jsonString = JSON.stringify(persone);
// console.log(jsonString);

// with the help of JSON.parse(jsonString) => You can make JSON string to Object
const stringToObject = JSON.parse(jsonString);
// console.log(stringToObject);
