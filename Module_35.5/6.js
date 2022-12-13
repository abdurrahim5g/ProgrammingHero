/**
 * 
 * 
 *  ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল
      হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
      
      6.2
      array এর destructuring
      করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে
      destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
 */

const car = {
  carName: "TOYOTA",
  release: 2019,
};

({ carName, release } = car);
console.log(carName, release);

// Array Destructuring
const income = [20000, 10000, 1000];
[salery, balance, bonus] = income;

console.log(balance);
