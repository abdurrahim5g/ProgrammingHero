/**
 *
 *
 * Hey Abdur Rahim 🚀🚀
 *
 * She is Rakel 🤷‍♂️ And she want to know, How she can get 1cr after 10 years, IF she invest on stok market.
 * and she get 10% every year. Now can you tell me how must I should invest on this year.
 * So that i can get 1cr after 10 year.
 *
 * AR => Yes, I can tell you, Just 5 minutes
 */

function oneCrAfterTenYear(iWant, year, rateOfInterest) {
  let youShouldInvest = 0;
  let want = iWant;

  for (let i = 1; i <= year; i++) {
    decreaseEveryYear = (want * rateOfInterest) / 100;
    want -= decreaseEveryYear;
  }
  youShouldInvest = want;

  return youShouldInvest;
}

function iGetAfterSomeYear(invest, year, rateOfInterest) {
  let total = invest;
  for (let i = 1; i <= year; i++) {
    increase = (total * rateOfInterest) / 100;
    total += increase;
  }
  return total;
}

const iWillInvest = oneCrAfterTenYear(1000, 5, 10);
const iGet = iGetAfterSomeYear(1000000, 30, 10);

console.log(iWillInvest, iGet);
