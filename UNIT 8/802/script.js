const multiply = document.querySelector('#multiply');
const division = document.querySelector('#division');
const result = document.querySelector('#result');
multiply.onclick = multiply;
division.onclick = division;

function multiply(){
    let firstNumber = document.querySelector('#first').value;
    let secondNumber = document.querySelector('#second').value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    result.textContent = firstNumber * secondNumber;
}

function division(){
    let firstNumber = document.querySelector('#first').value;
    let secondNumber = document.querySelector('#second').value;
    firstNumber = parseInt(firstNumber,10);
    secondNumber = parseInt(secondNumber,10);
    result.textContent ="Result:" + (firstNumber / secondNumber);
}