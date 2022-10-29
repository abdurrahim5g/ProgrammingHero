/**
 *
 * In this file I will learn JS Node vs Html Element
 */
const node = document.querySelector("#node");
const div = document.createElement("div");
div.innerHTML = `
    <h2>Hello Bangladesh</h2>
    <p>I love the Bangladesh Army</p>
`;
node.appendChild(div);

console.log(node.parentNode);
console.log(node.parentNode.parentNode);
console.log(node.parentNode.parentNode.parentNode);
console.log(node.parentNode.parentNode.parentNode.parentNode);
console.log(node.parentNode.parentNode.parentNode.parentNode.childNodes);
