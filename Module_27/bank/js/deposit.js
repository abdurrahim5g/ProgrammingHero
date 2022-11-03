/**
 *
 * In this file i will make all deposit changes
 */
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositAmount = getInputValueById("deposit-field");
  if (depositAmount !== "" && depositAmount > 0) {
    const previousDeposit = getTextValueById("total-deposit");
    const newTodayDeposit = previousDeposit + depositAmount;

    const previousTotalBalance = getTextValueById("total-balance");
    const newTotalBalance = previousTotalBalance + depositAmount;

    setValueById("total-deposit", newTodayDeposit);
    setValueById("total-balance", newTotalBalance);
  } else {
    alert("Please input a valid amount ✔✔✔");
  }
});
