/**
 *
 * In this file i will do some code for problem.html file
 */

function makeMultiple(multipleTimes) {
  const inputField = document.getElementById("number-field");
  const multiple = parseInt(inputField.value) * multipleTimes;

  const showMultipleValues = document.getElementById("show-numbers");
  const li = document.createElement("li");
  li.innerText = multiple;
  showMultipleValues.prepend(li);
}

document.getElementById("dubble").addEventListener("click", function () {
  makeMultiple(2);
});

// make a triple funciton
document.getElementById("triple").addEventListener("click", function () {
  makeMultiple(3);
});
