/**
 * Problem 01
 * => How much Harry will return the shopkeeper? if he buy 700/= and give shopkeeper 1000/=
 */

const harryTotalMoney = 1000;
const fruitsCost = 700;

function isHarryDeserveMoney(harryTotalMoney, fruitsCost) {
  const reminderMoney = harryTotalMoney - fruitsCost;
  if (harryTotalMoney > fruitsCost) {
    console.log(`Harry will deserve ${reminderMoney}/= from shopkeeper.`);
  } else if (harryTotalMoney < fruitsCost) {
    console.log(
      `Harry will return more ${Math.abs(reminderMoney)}/= to shopkeeper!`
    );
  } else {
    console.log("Harry don't return anything. He just get fruites");
  }
}

isHarryDeserveMoney(1000, 700);
console.log();
isHarryDeserveMoney(500, 700);
console.log();
isHarryDeserveMoney(700, 700);
