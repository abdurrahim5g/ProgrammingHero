/***
 *
 *
 * In this file i will clone or copy a object
 */

const Car = {
  name: "Toyota",
  color: "Black",
  madeBy: "India",
  addition: {
    first: 2001,
    second: 2011,
    third: 2015,
  },
};

const Car2 = JSON.parse(JSON.stringify(Car));
Car.addition.first = 2005;
Car2.power = "207 HP";

console.log(Car);
console.log(Car2);
