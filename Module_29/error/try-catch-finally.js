/**
 *
 *
 * In this file I will learn JS [ try, catch, finally ]
 */

// in this example => catch will not execute because try isn't got any error
try {
  // always executes
  console.log("Return Something");
} catch (err) {
  // don't execute
  console.log(err);
} finally {
  // always executes
  console.log("Code Will execute sucessfully");
}
console.log("");

// in this example catch will execute
try {
  // not execute
  console.log(`Try to show the output of: ${friends}`);
} catch (err) {
  // executed
  console.log(err);
} finally {
  // executed
  console.log("Code will faild to execute");
}
