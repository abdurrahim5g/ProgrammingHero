/**
 *
 *
 * In this file i will  learn About DOM event and Intract with JS
 */

// const makeAqua = document.getElementById("makeAqua");

function makeAqua() {
  document.body.style.backgroundColor = "aqua";
}

const makePink = document.getElementById("makePink");
makePink.addEventListener("click", function () {
  document.body.style.background = "pink";
});

// make a function which can able to add rendom number
const addRandomNumber = document.getElementById("addRandomNumber");
addRandomNumber.addEventListener("click", function () {
  const randomNumberContainer = document.getElementById(
    "randomNumberContainer"
  );
  const li = document.createElement("li");
  const randomNumber = parseInt(Math.random() * 100);
  li.innerText = randomNumber;

  randomNumberContainer.appendChild(li);
});
