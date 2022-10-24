/**
 *
 *
 * In this file I will learn how to short an array Object
 *
 * You have a phone array with some phone details
 * -> Find out the phone which is the chipest but camera is minimum 12 MP
 */

const phones = [
  { name: "Samsung", model: "GM-2", camera: 12, price: 30000 },
  { name: "Vivo", model: "V21", camera: 10, price: 14400 },
  { name: "Oppo", model: "sl-100", camera: 20, price: 16000 },
  { name: "HTC", model: "ht-100", camera: 30, price: 56000 },
  { name: "Apple", model: "14", camera: 14, price: 120000 },
  { name: "Xiaomi", model: "Note 5", camera: 48, price: 27000 },
  { name: "Nokia", model: "N 1200", camera: 7, price: 25000 },
  { name: "Inflix", model: "Hot 10", camera: 30, price: 15000 },
];

function chipestPhone(phones) {
  let chipest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    if (chipest.price > phones[i].price && phones[i].camera >= 12) {
      chipest = phones[i];
    }
  }
  console.log(chipest);
}

chipestPhone(phones);
