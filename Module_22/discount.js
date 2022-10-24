/***
 *
 *
 * In this file I will learn how to apply complex Discount in JS
 *
 * The Discount offer is
 * ====================
 * if you buy 100 pen or less then the price is 20/=
 * if you buy 200 pen or less then the price is 15/= but 1st 100 is 20/=
 * if you buy 200 pen or more then the price is 10/= but 1st 100 is 20/=
 * And 2nd 100 is 15/=
 *
 */

function penPrice(penQuentity) {
  const first100Pen = 20;
  const secound100Pen = 15;
  const extraPen = 10;
  const totalPen = penQuentity;

  if (totalPen <= 100) {
    return totalPen * first100Pen;
  } else if (totalPen > 100 && totalPen <= 200) {
    let first100Price = first100Pen * 100;
    let extraPenPrice = (totalPen - 100) * secound100Pen;
    return first100Price + extraPenPrice;
  } else {
    let first100Price = first100Pen * 100;
    let secound100Price = secound100Pen * 100;
    let extraPenPrice = (totalPen - 200) * extraPen;
    return first100Price + secound100Price + extraPenPrice;
  }
}

const penCost = penPrice(500);

console.log("Total pen price is:", penCost);
