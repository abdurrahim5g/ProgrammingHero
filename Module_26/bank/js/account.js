/**
 *
 *
 * In this file i will manage the deposit and withdrow cashflow
 */

// menaeg the deposit
const deposit = document.getElementById("depositButton");
deposit.addEventListener("click", function () {
  const depositAmmount = document.getElementById("depositAmmount");
  let todayDeposit = document.getElementById("todayDeposit");
  let totalBalance = document.getElementById("totalBalance");

  const depositAmmountInt = parseFloat(depositAmmount.value);
  const todayDepositInt = parseFloat(todayDeposit.innerText);
  const totalBalanceInt = parseFloat(totalBalance.innerText);

  if (depositAmmountInt > 0) {
    const newDeposit = depositAmmountInt + todayDepositInt;
    const newTotalBalance = depositAmmountInt + totalBalanceInt;

    todayDeposit.innerText = newDeposit;
    totalBalance.innerText = newTotalBalance;

    //history manage
    const history = document.getElementById("history");
    const li = document.createElement("li");
    li.innerHTML = `Your deposit amount is: <span class='font-semibold text-green-600'>${depositAmmountInt}</span> and total amount is: <span class='font-semibold'>${newTotalBalance}<span>`;
    history.prepend(li);

    depositAmmount.value = "";
  } else {
    alert("Please input a valid amount.!");
  }

  console.log(todayDepositInt, depositAmmountInt);
});

/**
 *
 * Let's menage the withdrow
 */

const withdrow = document.getElementById("withdrowButton");
withdrow.addEventListener("click", function () {
  const withdrowAmmount = document.getElementById("withdrowAmmount");
  let todayWithdrow = document.getElementById("todayWithdrow");
  let totalBalance = document.getElementById("totalBalance");

  const withdrowAmmountInt = parseFloat(withdrowAmmount.value);
  const todayWithdrowInt = parseFloat(todayWithdrow.innerText);
  const totalBalanceInt = parseFloat(totalBalance.innerText);

  if (withdrowAmmountInt > 0) {
    const newWithdrow = todayWithdrowInt + withdrowAmmountInt;
    const newTotalBalance = totalBalanceInt - withdrowAmmountInt;

    totalBalance.innerText = newTotalBalance;
    todayWithdrow.innerText = newWithdrow;

    // history manage
    const history = document.getElementById("history");
    const li = document.createElement("li");
    li.innerHTML = `Your withdrow amount is: <span class='font-semibold text-red-600'>${withdrowAmmountInt}</span> and total amount is: <span class='font-semibold'>${newTotalBalance}<span>`;
    history.prepend(li);

    withdrowAmmount.value = "";
  } else {
    alert("Please input a valid ammount!");
  }

  console.log(withdrowAmmountInt, todayWithdrowInt, totalBalanceInt);
});

/**
 *
 *
 * History Management
 *
 */
const showHistory = document.getElementById("showHistory");
showHistory.addEventListener("click", function () {
  const history = document.getElementById("history");
  history.style.display = "block";
});
