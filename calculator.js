let calculation = "";
let resutl = 0;
let operatorFlag = false;
let regex = /[^A-Za-z0-9]/;

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

let buttons = document.querySelectorAll(".buttons > button");

let calculationDisplay = document.querySelector(".screen > p.calculation");

// 1
buttons[3].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "1";
        calculationDisplay.textContent = calculation;
    }
});

// 2
buttons[2].addEventListener("click", () => {
  if(calculation.length < 24){
    calculation = calculation + "2";
    calculationDisplay.textContent = calculation;
}
});

// 3
buttons[1].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "3";
        calculationDisplay.textContent = calculation;
    }
});

// 6
buttons[5].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "6";
        calculationDisplay.textContent = calculation;
    }
});

// 5
buttons[6].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "5";
        calculationDisplay.textContent = calculation;
    }
});

// 4
buttons[7].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "4";
        calculationDisplay.textContent = calculation;
    }
});

// 9
buttons[9].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "9";
        calculationDisplay.textContent = calculation;
    }
});

// 8
buttons[10].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "8";
        calculationDisplay.textContent = calculation;
    }
});

// 7
buttons[11].addEventListener("click", () => {
    if(calculation.length < 24){
        calculation = calculation + "7";
        calculationDisplay.textContent = calculation;
    }
});

// 0
buttons[14].addEventListener("click", () => {
  if (calculation.charAt(calculation.length !== 0) && calculation.length < 24) {
    calculation = calculation + "0";
    calculationDisplay.textContent = calculation;
  }
});

// delete
buttons[0].addEventListener("click", () => {
    if(calculation.length > 1){
        if(!regex.test(calculation.substring(0, calculation.length - 1))){
            operatorFlag = false;
        }
        calculation = calculation.substring(0, calculation.length - 1);
        calculationDisplay.textContent = calculation;
    }
    else {
        calculation = ""
        calculationDisplay.textContent = '0';
    }
  });

  // plus
  buttons[4].addEventListener("click", () => {
    if(calculation.length < 24 && calculation.length > 0 && operatorFlag === false){
        calculation = calculation + "+";
        calculationDisplay.textContent = calculation;
        operatorFlag = true;
    }
  });

  // minus
  buttons[8].addEventListener("click", () => {
    if(calculation.length < 24 && !calculation.split("").includes('-')){
        calculation = calculation + "-";
        calculationDisplay.textContent = calculation;
    }
    else {
        calculation = "";
        calculationDisplay.textContent = "SYNTAX ERROR";
        operatorFlag = false;
    }
  });

  // divide
  buttons[13].addEventListener("click", () => {
    if(calculation.length < 24 && calculation.length > 0  && operatorFlag === false){
        calculation = calculation + "/";
        calculationDisplay.textContent = calculation;
        operatorFlag = true;
    }
    else {
        calculation = "";
        calculationDisplay.textContent = "SYNTAX ERROR";
        operatorFlag = false;
    }
  });

  // multiply
  buttons[15].addEventListener("click", () => {
    if(calculation.length < 24 && calculation.length > 0  && operatorFlag === false){
        calculation = calculation + "*";
        calculationDisplay.textContent = calculation;
        operatorFlag = true;
    }
    else {
        calculation = "";
        calculationDisplay.textContent = "SYNTAX ERROR";
        operatorFlag = false;
    }
  });

  // clear all
  buttons[16].addEventListener("click", () => {
        calculation = ""
        calculationDisplay.textContent = '0';
        operatorFlag = false;
  });