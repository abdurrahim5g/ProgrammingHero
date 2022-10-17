/**
 *
 * In this file i will learn About JS Function.
 */

function fullDateToday() {
  let date = new Date();
  let monthNames = [
    "January",
    "Fabruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  console.log(`${day} ${month} ${year}`);
}

fullDateToday();

/**
 * Above function example with no parameter.
 */

/**
 *
 * Let's see another function example
 *
 */

function powerOfCompounding(totalInvest, investForYear, rateOfRetun) {
  for (let i = investForYear; i > 0; i--) {
    // console.log(totalInvest);
    totalInvest += (totalInvest / 100) * rateOfRetun;
  }
  //   return totalInvest;
}
// console.log(powerOfCompounding(500000, 20, 10));

/***
 *
 *
 *
 *
 * Let's try another investment plan for next 20 year each year Invest 1.L
 */

// function investPlanFor20(initialInvestment, numberOfYear, rateOfInterest) {
//   let investEveryYear = initialInvestment;
//   for (let i = 1; i <= numberOfYear; i++) {
//     let interest = (initialInvestment * 10) / 100;
//     console.log(initialInvestment);
//     let afteryear = (initialInvestment += interest) + investEveryYear;
//     initialInvestment = afteryear;
//     // console.log(afteryear);
//   }
// }
// investPlanFor20(500000, 10, 15);
