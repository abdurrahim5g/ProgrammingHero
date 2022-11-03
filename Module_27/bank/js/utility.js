/***
 *
 *
 * In this file I will store all utility tools
 */

// get input value by ID
function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseInt(inputField.value);
  inputField.value = "";
  return inputValue;
}

// get text value by ID
function getTextValueById(textId) {
  let textField = document.getElementById(textId);
  const textValueToNumber = parseFloat(textField.innerText);
  return textValueToNumber;
}

// set text value by ID
function setValueById(textId, value) {
  document.getElementById(textId).innerText = value;
}
