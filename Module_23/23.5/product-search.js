/**
 *
 *
 * In this file I will learn Product search
 */

const products = [
  { name: "Xiaomi Phone", price: 20000, condetion: "new" },
  { name: "Oppo Phone", price: 20000, condetion: "new" },
  { name: "Apple Phone", price: 20000, condetion: "new" },
  { name: "HP Laptop", price: 20000, condetion: "new" },
  { name: "Dell Laptop", price: 20000, condetion: "new" },
  { name: "Vivo Phone", price: 20000, condetion: "new" },
  { name: "OnePlus Phone", price: 20000, condetion: "new" },
  { name: "Lg Laptop", price: 20000, condetion: "new" },
  { name: "Walton Laptop", price: 20000, condetion: "new" },
];

function searchProducts(products, search) {
  let searchFilters = [];
  const searchInLower = search.toLowerCase();
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchInLower)) {
      searchFilters.push(products[i]);
    }
  }
  return searchFilters;
}

const searchResult = searchProducts(products, "lg");
console.log(searchResult);
