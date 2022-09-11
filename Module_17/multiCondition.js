/**
 *
 * Let's try multi condetion in js
 */
const cgpa = 3;

let text = "You are got ";
if (cgpa > 4 || cgpa <= 0) {
  console.log("Please put the right retult");
} else if (cgpa == 4) {
  console.log(text + "A+");
} else if (cgpa >= 3.8) {
  console.log(text + "A");
} else if (cgpa >= 3.5) {
  console.log(text + "A-");
} else if (cgpa >= 3.25) {
  console.log(text + "B+");
} else if (cgpa >= 3) {
  console.log(text + "B");
} else if (cgpa >= 2.5) {
  console.log(text + "C");
} else {
  console.log("Tor Dara kissu hoba na, Kal tora riksha kina dibo!");
}
