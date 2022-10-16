/**
 *
 *
 * তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে,
 * ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে।
 * না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
 */

const myCapital = 60001;
let text = "I will buy a ";

if (myCapital > 80000) {
  text += "Macbook Air.";
} else if (myCapital > 60000) {
  text += "Gaming Laptop.";
} else if (myCapital > 40000) {
  text += "Lenovo Yoga";
} else if (myCapital > 20000) {
  text += "2nd Hand HP Laptop";
} else if (myCapital < 0) {
  text = "Please input a valide Capital";
} else {
  text = "I will work on Mobile";
}

// console.log(text);

/**
 * ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
 */

for (let outputNumber = 39; outputNumber > 0; outputNumber--) {
  // console.log(outputNumber + " I have spand a good time today");
}

/**
 * একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
 */
let startingNumber = 58;
let endNumber = 98;
while (startingNumber <= endNumber) {
  // console.log(startingNumber);
  startingNumber++;
}

/**
 *
 * একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
 */

for (let startAT = 412; startAT <= 456; startAT += 2) {
  // console.log(startAT);
}

/**
 *
 * একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
 */
let startAT = 581;
while (startAT <= 623) {
  //   console.log(startAT);
  startAT += 2;
}

/**
 *
 *  তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও।
 *  তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
 */

const iLearned = [
  "HTML",
  "CSS",
  "JS",
  "jQuery",
  "jQuery Plugin",
  "Web Design",
  "PSD to HTML",
  "Figma to HTML",
  "WordPess",
  "WordPess Theme",
  "WordPess Plugin",
  "React Basic",
  "Contact Form",
  "WP Backary",
  "Elementor",
  "Hindi Languaages",
];

for (let i = 0; i < iLearned.length; i++) {
  //   console.log(iLearned[i]);
}

/**
 *
 * তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও।
 * তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
 */

const usedPhoneModel = [
  "Nokia 3300",
  "Sampony B2",
  "Samsung GM 2",
  "Xiaomi Note 5",
  "Samsung A03s",
];

let index = 0;
while (index < usedPhoneModel.length) {
  //   console.log(usedPhoneModel[index]);
  index++;
}

/**
 *
 *
 * একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
 */

for (let start = 30; start <= 86; start++) {
  if (start == 44) {
    break;
  }
  // console.log(start);
}

/***
 *
 * তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো।
 * যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না।
 * বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
 */

const bookPrice = [300, 150, 120, 400, 60, 80, 200, 210];
for (let i = 0; i < bookPrice.length; i++) {
  if (bookPrice[i] > 200) {
    continue;
  }
  // console.log(bookPrice[i]);
}
