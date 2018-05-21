let numbersDiv = document.getElementById('numbers-div');
let operationsDiv = document.getElementById('operations-div');
let display = document.getElementById('display');

let num1 = null;
let num2 = null;
let operation = "";
const operationsList = ['+', '-', '*', '/', '='];

function calculate(num1, num2, operation){
  if(operation === "+"){
    return num1 + num2;
  } else if(operation === "-"){
    return num1 - num2;
  } else if(operation === "*"){
    return num1 * num2;
  } else if(operation === "/"){
    return num1 / num2;
  }
}

numbersDiv.addEventListener('click', function(e){
  let num = e.target.textContent;
  display.textContent += e.target.textContent;
});

operationsDiv.addEventListener('click', function(e){
  let operation = e.target.textContent;
  if(!operationsList.includes(display.textContent) && num1 !== null){
    num2 = parseInt(display.textContent);
    display.textContent = calculate(num1, num2, operation);
    num1 = null;
    num2 = display.textContent;
  } else{
    if(num1 === null){
      num1 = display.textContent;
      display.textContent = operation;
    }
  }
});