/**
 *
 *
 * In this file i will write all discount related code
 */

document.getElementById("apply-coupne").addEventListener("click", function () {
  const allCoupne = [
    { coupneName: "DOM10", offerInParcent: 10 },
    { coupneName: "DOM20", offerInParcent: 20 },
    { coupneName: "DP25", offerInParcent: 25 },
    { coupneName: "KF05", offerInParcent: 5 },
    { coupneName: "DOM", offerInParcent: 30 },
  ];
  const getCoupne = document.getElementById("coupne-field").value;

  for (let i = 0; i < allCoupne.length; i++) {
    if (getCoupne === allCoupne[i].coupneName) {
      const originalPrice = document.getElementById("original-price").value;
      const originalPriceInNumber = parseFloat(originalPrice);

      const discountAmount =
        (originalPriceInNumber * allCoupne[i].offerInParcent) / 100;
      const payableAmount = originalPriceInNumber - discountAmount;
      document.getElementById("payableAmount").innerText = payableAmount;

      document.getElementById("invalide-coupne").innerText = "";
      return;
    }
  }

  // if coupne is not match
  document.getElementById("invalide-coupne").innerText =
    "Your coupne is invalide 😁😁😁";
});
