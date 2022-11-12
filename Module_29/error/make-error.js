/**
 *
 *
 * The main thing about the error
 *
 * You can make the won error when you want
 *
 * You can make Error using [new Error()]
 */
// const err = new Error("This is demo error");
// console.log(err);

try {
  console.log(something);
} catch (err) {
  // those all code are execute
  console.log("I am inside the catch");
  console.log(err);
  console.log("I am last line of the error");
  const newError = new Error("Try can't be execute the code");
  console.log(newError);
}
// this is also execute
console.log("Finish the try case ");

// below [bestFriend] is an Referance error that's why JS will stop in this line, JS Don't execute the others code or Function
console.log(bestFriend);

// this code isn't execute because JS got an Error above
console.log("He is my Best Friend");
