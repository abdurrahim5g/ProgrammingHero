/**
 *
 * In this file I will solved some problem with JS
 */

/**
 *
 * leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো।
 * Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
 */
function leapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
  return false;
}
console.log(leapYear(1900));

/**
 *
 * তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে,
 * সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
 */
function isYourAgeEven(yourAge) {
  if (yourAge % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isYourAgeEven(18)); // return true => 🚀🚀🚀

/**
 *
 * এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে।
 * আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
 */
function hourToMinute(houres) {
  return houres * 60;
}
console.log(hourToMinute(2));

/**
 *
 *
 * মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে
 * second এ convert করে তোমাকে রিটার্ন করবে।
 */

function houreToSecound(h) {
  return h * 60 * 60;
}
console.log(houreToSecound(1));
