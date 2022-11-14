/**
 *
 *
 * In this file I will learn JS Class
 */

class Information {
  name;
  occupation;
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
}

const info = new Information("Abdur Rahim", "Developer");
console.log(info);

/***
 *
 *
 * Let's create a Car Class
 *
 */
class Car {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const thisYear = new Date().getFullYear();
    return thisYear - this.year;
  }
}

const myCar = new Car("Marseris", 2010);

console.log(myCar.age());
