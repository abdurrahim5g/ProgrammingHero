/**
 * Learn JS Nasted condetion
 *
 * => Find out the problem.
 *
 * =>   Abdur Rahim is waking in the road. In that time he looks a boy who is reading book in the road side.
 *      And he deside he gives 5000/= tk If he count 0 to 100 in one minute. and if he count 100+ then he gives
 *      10000/= tk. -> Let's implement this problem in code.
 */

let boyCount = 101;

if (boyCount >= 100) {
  let extraCount = boyCount - 100;

  if (extraCount > 0) {
    console.log(`The boy get total ${5000 + extraCount * 100}/= Tk`);
  } else {
    console.log("Boy win 5000/= tk");
  }
} else {
  console.log("Boy can't get any money");
}
