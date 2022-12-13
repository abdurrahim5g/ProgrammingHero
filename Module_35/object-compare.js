/**
 *
 *
 * Object compare in JS
 */

const person = {
  name: "Abdur Rahim",
  address: "Jessore",
  personID: 300,
};
const newPerson = {
  name: "Abdur Rahim",
  address: "Jessore",
  personID: 300,
};

// compare object with [ JSON.stringify(Object) ]
// console.log(JSON.stringify(person) === JSON.stringify(newPerson));

/**
 *
 *
 * Let's compare with [ shallow equality ]
 */

const objOne = {
  p1: "Masudul",
  p2: "A.Rahman",
  p3: "Rayhan",
  p4: 3,
};

const objTwo = {
  p1: "Masudul",
  p3: "Rayhan",
  p2: "A.Rahman",
  p4: 3,
};

const shallowEqual = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (const key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const bothAreEqual = shallowEqual(objOne, objTwo);
// console.log(bothAreEqual);

/**
 *
 *
 *
 * let's compare Object with Deep equality
 */

const isObject = (obj) => {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};

const studentOne = {
  name: "Abdur Rahim",
  roll: 30,
  marks: {
    bangla: 30,
    math: 80,
    english: 70,
  },
};

const studentTwo = {
  name: "Abdur Rahim",
  roll: 30,
  marks: {
    bangla: 30,
    math: 80,
    english: 71,
  },
};

const deepCompare = (objOne, objTwo) => {
  const [key1, key2] = [Object.keys(objOne), Object.keys(objTwo)];

  if (key1.length !== key2.length) {
    return false;
  }

  for (const key of key1) {
    if (objOne[key] !== objTwo[key]) {
      const areObject = isObject(objOne[key]) && isObject(objTwo[key]);
      if (areObject) {
        return deepCompare(objOne[key], objTwo[key]);
      } else {
        return false;
      }
    }
  }

  return true;
};

const isMatch = deepCompare(studentOne, studentTwo);
console.log(isMatch);

// console.log(isObject(studentOne) && isObject("studentTwo"));
