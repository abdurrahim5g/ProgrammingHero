/***
 *
 *
 *
 * In this file I
 */
const section = document.getElementById("set");
// console.log(section.id); // return the html ID
// console.log(section.classList); // return class like an Array
// console.log(section.classList.value); // return all class like string
// console.log(section.className); // return all class like string

section.classList.add("hello-bangladesh"); // add class => hello-bangladesh
section.classList.remove("items"); // remove class => items
section.classList.remove("section"); // remove class => section

console.log(section.innerText); // return all inner text
console.log(section.innerHTML); // return all inner HTML
console.log(section.outerHTML); // return all inner HTML
console.log(section.outerText); // return all inner HTML
