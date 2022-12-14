/**
 *
 * In this file i will  learn [ alert, confirm, prompt ]
 */
alert("Alert something");

const isConfirm = confirm("Are you sure! You want to send data to browser?");

console.log(isConfirm);

if (isConfirm) {
  const yourName = prompt("Enter your name..");
  console.log(yourName);
}
