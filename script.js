const buttons = document.querySelectorAll('input[type="button"]');
const display = document.querySelector('.display');
const specialChars = ["%", "+", "-", "x", "÷", "="];
let output = "";

const calculate = (btnVal) => {
  
  if (btnVal === "=" && output !== "") {
     output = eval(output.replace("%", "/100").replace(/x/g, '*').replace(/÷/g, '/'));
  } else if (btnVal === "AC"){
    output = "";
  } else if (btnVal === "Del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnVal)) return;
    output += btnVal;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
  calculate(event.target.value);
  });
});