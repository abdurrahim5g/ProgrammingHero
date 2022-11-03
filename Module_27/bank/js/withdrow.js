/**
 *
 * In this file i will manage all the withdrow task
 */

// let's withdrow some money
document.getElementById("btn-withdrow").addEventListener("click", function () {
  const currentWithdrow = getInputValueById("withdrow-field");
  if (currentWithdrow !== "" && currentWithdrow > 0) {
    const previousWithdrow = getTextValueById("total-withdrow");
    const newWithdrow = currentWithdrow + previousWithdrow;

    const previousTotal = getTextValueById("total-balance");
    const newTotalBalance = previousTotal - currentWithdrow;

    setValueById("total-withdrow", newWithdrow);
    setValueById("total-balance", newTotalBalance);
  } else {
    alert("Please input a valid amount ✔✔✔");
  }
});
