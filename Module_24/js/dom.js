/**
 *
 * In this file I will learn HTML dom with JS.
 */

// let's get DOM with JS

const li = document.getElementsByTagName("li");
for (const singleList of li) {
  singleList.style.color = "red";
}

const quoteContainer = document.getElementById("quote-container");
quoteContainer.style.backgroundColor = "aqua";
quoteContainer.style.padding = "20px 40px";
quoteContainer.style.borderRadius = "10px";

const area = document.getElementsByClassName("area");
for (const section of area) {
  section.style.border = "2px solid gray";
  section.style.marginBottom = "20px";
  section.style.padding = "0 30px";
}

// if you want to get only first element of the DOM then use querySelector()
const paragraph = document.querySelector("p");
paragraph.style.color = "red";

const allParagraph = document.querySelectorAll("p");
console.log(allParagraph);
for (const p of allParagraph) {
  p.style.padding = "5px 20px";
  p.style.background = "aqua";
  p.style.borderRadius = "5px";
}
