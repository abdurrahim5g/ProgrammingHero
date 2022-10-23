/**
 *
 *
 * In this file i will learn string and world revarse in JS
 */
function stringRevarse(string) {
  let revarseText = "";
  for (let i = string.length - 1; i >= 0; i--) {
    revarseText += string[i];
  }
  console.log(revarseText);
}

stringRevarse("I love you");

function worldRevarse(statement) {
  let statementToArray = statement.split(" ");
  revarseWorld = "";
  for (let i = statementToArray.length - 1; i >= 0; i--) {
    revarseWorld += statementToArray[i] + " ";
  }
  console.log(revarseWorld);
}
worldRevarse("I love you rakel");
