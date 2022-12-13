/**
 * 
 * 
 *  ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি
      থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা
      প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা
      ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন
      একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।
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
  carInfo: function () {
    return `${this.name} ${this.model} have  
    ${Object.keys(this.version).length} version with 
    ${this.colorVarient.length} Color Varient available in Bangladesh.`;
  },
};

console.log(car.carInfo());
