/**
 *
 * in this file i will explore all storage in browser
 */

localStorage.setItem("name", "Abdur Rahim");
localStorage.setItem("roll", 30);

const persone = {
  name: "Abdur Rahim",
  roll: 20,
  address: "jessore",
};

localStorage.setItem("persone", JSON.stringify(persone));

const getPerson = JSON.parse(localStorage.getItem("persone"));

for (const info in getPerson) {
  console.log(info, getPerson[info]);
}

/**
 *
 *
 * let's play with sessionStroge("key", "value")
 */
sessionStorage.setItem("userLoggedIn", true);

const isLoggedIn = sessionStorage.getItem("userLoggedIn");
console.log(isLoggedIn);
