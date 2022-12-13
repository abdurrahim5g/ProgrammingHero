/**
 * 
 * 
 * 
 *  ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার
      মধ্যে উপরের অবজেক্ট এর  তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং
      এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে
      সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array
      সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে
      পারো।
 */

const car = {
  name: "Toyota",
  model: "THV",
  version: {
    first: "v1",
    secound: "v2",
    third: "v3",
  },
  colorVarient: ["Black", "Silver", "White"],
};

const myCarInfo = `I a have ${car.name} ${car.model} car with ${car.colorVarient[1]} color and the version is: ${car.version.third}`;
console.log(myCarInfo);
