/***
 *
 *
 * In this file I will do all the practice problem
 * => whice provice me PH
 */

/**
 * Challenge number 01
 * ===============================
 *   ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে
      আউটপুট দেখাবে। , 
 */
// setTimeout(() => console.log("Hello Programer!"), 3500);

/**
 * 
 * Challenge Number 02
 * =====================
 *   ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো।
      যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে
      আউটপুট দেখাও 
 */

// let number = prompt("Type a number");
// console.log(number);
// alert(parseInt(number) + 200);

/**
 * 
 * 
 * Chellange Number 03
 * =========================
 *   ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন
      দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা
      কনসোল লগ করে দেখাও
 */
// const allowLocation = confirm("Do you want to share location");
// if (allowLocation) {
//   console.log(location.href);
// }

/**
 * 
 * Challenge 4
 * ======================
 *    ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের
      মধ্যে লিখে ফেলো। 
 */
const cookie = `Cookie is a small pice of data like [userName, password, userApiKey, etc...]
                Cookie use for best user experiance for user. Cookie store in your browser.
                files, Cookie can store single or multiple data.`;

/**
 *
 * Challenge 05
 * ============
 *  ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো।
      ইংরেজিতে। (নিজের মতো করে লিখবে )
 *
 */
const localStor = `Local Storage can store data in the browser.
                   Local Storage store Json string with key value pair
                   Local storage can store data when the browser is closed.
                    `;

const session = `Session Storage also store data into browser
                 Data store with [key, value] pairs
                 Session storage remove data, when browser is closed`;

/**
 * Challenge 06
 * ================
 * ৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা
      ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো।
 * 
 */
const jsRun = `Every browser have a specail engin for run the JS Code. 
                For Example Crome Use V8 Engin for run the JavaScript Code.
                On HTML JS called in HTML file or Called inside JS in source code.
                1. External file with <script src=""> </script> tag`;

/**
 * 
 * Challenge 07
 * ===============
 *    ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে
      সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে
      রাখো।
 */
const asynchronous = `setTimeout(()=> {})  / setInterval(()=> {})  / fetch() those are asynchoronous in JavaScript.
                      If you are wait for something, in paralal others code are execute => then this is called
                      Asynchoronous. `;

/**
 * Challenge
 * ================
 * ৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না।
      তাও আরেকবার দেখে রাখবে।
 * 
 */
const eventLoop = `We know JS is a 'Single Thread' Programming language.
                    That's mean JS can execute 1 line at a time. If user action 
                    Multiple event at a time JS will loop those event and execute 
                    One by one. And this is called Event Loop.`;

/**
 * Challenge 09
 * ========================
 * ৯. ভিডিওতে চারটা লেভেল এর লোকাল স্টোরেজ রিলেটেড কাজ দেয়া হয়েছে। সেগুলা
      একটু ভালো করে করো। <br /><br />

    Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
    parameter will be a string) that will perform arithmetic operation depending on the third parameter and
    will print the result. For example:
        1. Print result of num1+num2 if operation is “add”
        2. Print result of num1-num2 if operation is “subtract”
        3. Print result of num1*num2 if operation is “multiply”
        4. Print result of num1/num2 if operation is “divide”
        5. Print result of num1%num2 if operation is “modulus”
        6. Else print “Invalid operation”
 */

const calculator = (one, two, poerator = "") => {
  if (poerator === "add") {
    console.log(one + two);
  } else if (poerator === "subtract") {
    console.log(one - two);
  } else if (poerator === "multiply") {
    console.log(one * two);
  } else if (poerator === "divide") {
    console.log(one / two);
  } else if (poerator === "modulus") {
    console.log(one % two);
  } else {
    console.log("Invalid Operation");
  }
};

calculator(3, 2, "add");
calculator(3, 2, "subtract");
calculator(3, 2, "multiply");
calculator(3, 2, "divide");
calculator(3, 2, "modulus");
calculator(3, 2);
