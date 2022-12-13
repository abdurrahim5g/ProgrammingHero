/**
 *
 *
 * In this file i will learn for in and for of => To iteral the array and object
 */
const products = ["Brade", "Cake", "Ice Cream", "Laddu", "Chocklet"];
//console.log(products);
for (const product of products) {
  // console.log(product);
}
for (const pIndex in products) {
  //  console.log(products[pIndex]);
}
/**
 * ===> The for of summery
 * if you use [ for of ] in an array then it will loop the array value
 * if you use { for in } => in an array then it will loop the array index
 *
 * => Above I was show how to access array with { for in and for of } loop
 */

/**
 *
 *
 *
 * Below I will show you how you use [ forIn and forOf ] in an object
 */
const employee = {
  name: "Abdur Razzuk",
  address: "Keshabpur",
  isHonest: true,
};

for (const e in employee) {
  console.log(e, employee[e]);
}
for (const [key, value] of Object.entries(employee)) {
  console.log(key, value);
}

console.log(Object.entries(employee));
