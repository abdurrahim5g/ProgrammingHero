/**
 *
 *
 * In this file I will learn JS String
 */

// check the string length
const myName = "Abdur Rahim";
console.log(myName.length);

// check the specafie chat with At or charAt()
const specafic = myName.charAt(0);
const specafic2 = myName.at(-2);
console.log(specafic, specafic2);

// let's slice some string
let collage = "Jessore Polytechnic Institure";
console.log(collage.slice(0, 7));
console.log(collage.substring(8, 19));
console.log(collage.substr(8, 10));
console.log(collage.substr(8));
console.log(collage.substr(-8));

// let's replace string
const bestFriend = "Abdur Rahim";
console.log(bestFriend.replace("Rahim", "Rahman"));

// let's replace all string with global
const statement = "I love JPI. Jpi is best engineering collage in Bangladesh";
const isJPIthere = statement.includes("Jpi");
console.log(isJPIthere);

console.log(statement.replace(/JPI/gi, "RPI"));

// let's try uppercase and loewrcase
const userName = "abdurRahim";
const inputUser = "AbdurRahim";

if (userName.toLowerCase() === inputUser.toLowerCase()) {
  console.log("Username is Match");
} else {
  console.log("Username dosen't match");
}

// let's try out concat
let hello = "Hello";
let js = "JavaScript";
console.log(hello.concat(` World ${js}`));

// trim()
console.log("   Hello World   ");
console.log(" Hello World ".trim());

// padStart(number, string)
const dob = "10";
console.log(dob.padStart(4, " "));
console.log(dob.padEnd(10, "0"));

// Convert string to array
const friends = "Masudul A.Rahman Rayhan Miraj Riajul Mohsin Rony";
console.log(friends.split(""));
console.log(friends);

// startWith() & endWith()
const reviewOfBD = "Bangladesh is a gratest country in the world";
console.log(reviewOfBD.startsWith("Bangladesh"));
console.log(reviewOfBD.endsWith("world"));
