/**
 * In this file I will learn js Continue.
 * Let's see continue with loop
 */

for (let i = 0; i <= 10; i++) {
  if (i > 5) {
    continue;
  }
  console.log(i);
}

/**
 * The experiment with continue,,, Now I know the Continue is skip the statement.
 * We can see when i > 5 then all code are skiped.
 * I think this can help me in future.
 */

const bestFriends = [
  "Abdur Rahman",
  "Masudul Islam",
  "Rayhan",
  "Miraj",
  "Riajul",
  "Mohsin",
];

let x = 0;
const totalFriends = bestFriends.length;
while (x < totalFriends) {
  if (bestFriends[x] == "Riajul") {
    x++;
    continue;
  }
  console.log(bestFriends[x]);
  x++;
}
