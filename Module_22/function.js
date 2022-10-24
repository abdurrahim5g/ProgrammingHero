/***
 *
 *
 * In this file I will learn how to use condition, loop, function, variable etc
 *
 */

/**
 *
 * Problem 01,
 *
 * return 1 to 100,
 * and if the number divided by 5 then return "5 ⭐"
 * and if the number divided by 7 then return "7 ⭐"
 * and if the number divided by 5 & 7 then return "⭐⭐"
 */

function starReating(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
      console.log("⭐⭐⭐");
    } else if (i % 5 == 0) {
      console.log("5 ⭐");
    } else if (i % 7 == 0) {
      console.log("7 ⭐");
    } else {
      console.log(i);
    }
  }
}
// const star = starReating(100);

/***
 *
 *
 * Problem 02
 *
 * Calculate how meny wood need to made "2 bed", "4 chair" and "2 table"
 * if bedWood = 50 cft
 * if tableWood = 8 cft
 * if chairWood = 4 cft
 *
 */
function woodCalculator(bedQuentiry, tableQuentity, chairQuentity) {
  const bedWood = 50;
  const tableWood = 8;
  const chairWood = 4;

  return (
    bedQuentiry * bedWood +
    tableQuentity * tableWood +
    chairQuentity * chairWood
  );
}

console.log(woodCalculator(2, 3, 1));
