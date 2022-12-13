/***
 * 
 * 
 * 
 *   ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map
      ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে
      রাখবে। পুরা কাজটা এক লাইনে হবে।
 */

const numbers = [14, 28, 21, 70, 7];
const newArray = [];
numbers.map((value) => newArray.push(value / 7));

console.log(newArray);
