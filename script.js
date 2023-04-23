// get the calculator screen
const calculatorScreen = document.querySelector("#output");

function clearResult() {
  document.querySelector('#output').value = "";
}

function appendValue(value) {
  document.querySelector('#output').value += value;
}

function deleteValue() {
  let currentValue = calculatorScreen.value; //get the current value on the screen
  calculatorScreen.value = currentValue.slice(0, -1); //remove the last character from the current value
}

let deleteButton = document.querySelector('.btn-delete'); //get the delete button
deleteButton.addEventListener('click', deleteValue); //add an event listener to the delete button that calls the deleteValue function when clicked

function calculate() {
  //   let result = eval(document.getElementById("output").value);
  let expression = document.querySelector("#output");
//   let equal = document.querySelector("#equal");
//   equal.style.border = "none"
  let result = eval(expression.value);

  document.querySelector("#output").value = result;
}

// const input_field = document.getElementById("output")
// console.log(input_field.value)