/**
 *
 * Problem 1: radianToDegree()
 */
function radianToDegree(radian) {
  if (typeof radian === "number") {
    const degree = (180 / Math.PI) * radian;
    return parseFloat(degree.toFixed(2));
  }
  return "Please return a valide radian.";
}

/**
 *
 * Problem 2: isJavaScriptFile()
 */
function isJavaScriptFile(fileName) {
  if (typeof fileName === "string" && fileName.includes(".")) {
    const isJsFile = fileName.endsWith(".js");
    return isJsFile;
  }
  return "Please input a valid file name";
}

/**
 *
 * Problem 3: => oilPrice()
 * ====================
 *
 * diesel = 114
 * petrol = 130
 * octain  = 135
 *
 */
function oilPrice(amountOfDiesel, amountOfPetrol, amountOfOctane) {
  if (
    typeof amountOfDiesel === "number" &&
    typeof amountOfPetrol === "number" &&
    typeof amountOfOctane === "number"
  ) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octainPrice = 135;

    const totalOilPrice =
      dieselPrice * amountOfDiesel +
      petrolPrice * amountOfPetrol +
      octainPrice * amountOfOctane;

    return totalOilPrice;
  }
  return "Please input all are valid numbers";
}

/**
 *
 * Problem 04 => publicBusFare()
 *
 * যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি ।
 * বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
 */
function publicBusFare(totalPeople) {
  if (typeof totalPeople === "number" && totalPeople >= 50) {
    const extraPeopleAfterBusIsBook = totalPeople % 50;
    if (extraPeopleAfterBusIsBook >= 11) {
      const extraPeopleAfterMicroBusIsBook = extraPeopleAfterBusIsBook % 11;
      return extraPeopleAfterMicroBusIsBook * 250;
    } else {
      return extraPeopleAfterBusIsBook * 250;
    }
  } else if (totalPeople < 50 && typeof totalPeople === "number") {
    return "Don't need any public bus";
  }
  return "Please input all are valid number";
}

/**
 *
 * Problem 05: isBestFriend()
 *
 * তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে ।
 * তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা ।
 * যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
 */
const userOne = { name: "Abdur Rahman", friend: "Abdur Rahim" };
const userTwo = { name: "Abdur Rahim", friend: "Abdur Rahman" };

function isBestFriend(userOne, userTwo) {
  if (typeof userOne == "object" && typeof userTwo == "object") {
    if (userOne.name == userTwo.friend && userTwo.friend == userOne.name) {
      return true;
    }
  }
  return false;
}
