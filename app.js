let numbersDiv = document.getElementById('numbers-div');
let operationsDiv = document.getElementById('operations-div');
let display = document.getElementById('display');

let currentNum = 0;
let operation = "";

function

numbersDiv.addEventListener('click', function(e){
  let selection = e.target.textContent;
  console.log(typeof selection);
  display.textContent += e.target.textContent;
});

operationsDiv.addEventListener('click', function(e){
  let selection = e.target.textContent;
  console.log(typeof selection);
  display.textContent = e.target.textContent;
});