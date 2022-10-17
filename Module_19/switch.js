/**
 *
 * In this file i will learn   JS Switch case
 *
 */

let today = new Date().getDay();
// console.log(today);
let todayIs = "";

switch (today) {
  case 0:
    todayIs = "Sunday";
    break;
  case 1:
    todayIs = "Monday";
    break;
  case 2:
    todayIs = "Tuesday";
    break;
  case 3:
    todayIs = "Wednestday";
    break;
  case 4:
    todayIs = "Thursday";
    break;
  case 5:
    todayIs = "Friday";
    break;
  case 6:
    todayIs = "Saturday";
    break;
  default:
    todayIs = "A Day";
}

console.log(todayIs);
