/**
 *
 * In this file I will learn simple cart
 */

const cartProducts = [
  { name: "T-Shart", color: "black", price: 300, size: "XL" },
  { name: "Shart", color: "black", price: 550, size: "XL" },
  { name: "Jeans Pant", color: "black", price: 950, size: "XL" },
  { name: "Water Bottle", color: "silver", price: 150, size: "" },
  { name: "Musk", color: "blue", price: 50, size: "" },
];

function cartTotal(cartArray) {
  let userBuy = "Your buying product list: ";
  let totalCost = 0;

  totalProduct = cartArray.length;

  for (let i = 0; i < totalProduct; i++) {
    userBuy += cartArray[i].name + `${totalProduct - 1 != i ? ", " : ""}`;
    totalCost += cartArray[i].price;
  }
  console.log(userBuy, "And Your total cost is: ", totalCost);
}

cartTotal(cartProducts);
