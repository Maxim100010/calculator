let calculation = "";
let result = 0;
let operatorFlag = false;
let regex = /[^A-Za-z0-9]/;

function addition(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtraction(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiplication(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function division(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function operate(calculation) {
  if (calculation.split("").includes("+")) {
    let splitCalculation = calculation.split("+");
    result = addition(splitCalculation[0], splitCalculation[1]);
  } else if (calculation.split("").includes("-")) {
    let count = (calculation.match(/-/g) || []).length;
    if (count === 2) {
      let splitCalculation = calculation.split("-");
      result = subtraction("-" + splitCalculation[1], splitCalculation[2]);
    } else {
      let splitCalculation = calculation.split("-");
      result = subtraction(splitCalculation[0], splitCalculation[1]);
    }
  } else if (calculation.split("").includes("*")) {
    let splitCalculation = calculation.split("*");
    result = multiplication(splitCalculation[0], splitCalculation[1]);
  } else if (calculation.split("").includes("/")) {
    let splitCalculation = calculation.split("/");
    result = division(splitCalculation[0], splitCalculation[1]);
  } else {
    result = calculation;
  }
  return result;
}

let buttons = document.querySelectorAll(".buttons > button");

let calculationDisplay = document.querySelector(".screen > p.calculation");

let resultDisplay = document.querySelector(".screen > p.result");
// 1
buttons[3].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "1";
    calculationDisplay.textContent = calculation;
  }
});

// 2
buttons[2].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "2";
    calculationDisplay.textContent = calculation;
  }
});

// 3
buttons[1].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "3";
    calculationDisplay.textContent = calculation;
  }
});

// 6
buttons[5].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "6";
    calculationDisplay.textContent = calculation;
  }
});

// 5
buttons[6].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "5";
    calculationDisplay.textContent = calculation;
  }
});

// 4
buttons[7].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "4";
    calculationDisplay.textContent = calculation;
  }
});

// 9
buttons[9].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "9";
    calculationDisplay.textContent = calculation;
  }
});

// 8
buttons[10].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "8";
    calculationDisplay.textContent = calculation;
  }
});

// 7
buttons[11].addEventListener("click", () => {
  if (calculation.length < 24) {
    calculation = calculation + "7";
    calculationDisplay.textContent = calculation;
  }
});

// 0 - The first IF condition works by mistake given that it is comparing a string with an integer. Too afraid to change it
buttons[14].addEventListener("click", () => {
  if (
    calculation.charAt(calculation.length - 1 !== 0) &&
    calculation.length < 24
  ) {
    if (
      regex.test(calculation.charAt(calculation.length - 2)) &&
      calculation.slice(-1) !== "0"
    ) {
      calculation = calculation + "0";
      calculationDisplay.textContent = calculation;
    } else if (!regex.test(calculation.charAt(calculation.length - 2))) {
      calculation = calculation + "0";
      calculationDisplay.textContent = calculation;
    }
  }
});

// delete
buttons[0].addEventListener("click", () => {
  if (calculation.length > 1) {
    if (!regex.test(calculation.substring(0, calculation.length - 1))) {
      operatorFlag = false;
    }
    calculation = calculation.substring(0, calculation.length - 1);
    calculationDisplay.textContent = calculation;
  } else {
    calculation = "";
    calculationDisplay.textContent = "0";
  }
});

// plus
buttons[4].addEventListener("click", () => {
  if (
    calculation.length < 24 &&
    calculation.length > 0 &&
    operatorFlag === false
  ) {
    calculation = calculation + "+";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  } else if (
    operatorFlag === true &&
    !regex.test(calculation.charAt(calculation.length - 1))
  ) {
    evaluation();
    calculation = calculation + "+";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  }
});

// minus
buttons[8].addEventListener("click", () => {
  if (
    calculation.length < 24 &&
    calculation.length > 0 &&
    operatorFlag === false
  ) {
    calculation = calculation + "-";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  } else if (
    operatorFlag === true &&
    !regex.test(calculation.charAt(calculation.length - 1))
  ) {
    evaluation();
    calculation = calculation + "-";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  }
});

// divide
buttons[13].addEventListener("click", () => {
  if (
    calculation.length < 24 &&
    calculation.length > 0 &&
    operatorFlag === false
  ) {
    calculation = calculation + "/";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  } else if (
    operatorFlag === true &&
    !regex.test(calculation.charAt(calculation.length - 1))
  ) {
    evaluation();
    calculation = calculation + "/";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  }
});

// multiply
buttons[15].addEventListener("click", () => {
  if (
    calculation.length < 24 &&
    calculation.length > 0 &&
    operatorFlag === false
  ) {
    calculation = calculation + "*";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  } else if (
    operatorFlag === true &&
    !regex.test(calculation.charAt(calculation.length - 1))
  ) {
    evaluation();
    calculation = calculation + "*";
    calculationDisplay.textContent = calculation;
    operatorFlag = true;
  }
});

// clear all
buttons[16].addEventListener("click", () => {
  calculation = "";
  calculationDisplay.textContent = "0";
  resultDisplay.textContent = "0";
  operatorFlag = false;
});

function evaluation() {
  result = operate(calculation);
  if (result === Infinity) {
    calculationDisplay.textContent = "Cannot divide by zero";
    resultDisplay.textContent = "0";
    calculation = "";
    operatorFlag = false;
  } else if (
    result == 0 &&
    regex.test(calculation.charAt(calculation.length - 1))
  ) {
    calculationDisplay.textContent = "0";
    resultDisplay.textContent = "0";
    calculation = "0";
    operatorFlag = false;
  } else if (result == 0) {
    calculationDisplay.textContent = "0";
    resultDisplay.textContent = "0";
    calculation = "";
    operatorFlag = false;
  } else {
    calculation = result.toString();
    calculationDisplay.textContent = calculation;
    resultDisplay.textContent = result;
    operatorFlag = false;
  }
}

// evaluate
buttons[12].addEventListener("click", () => {
  if (!regex.test(calculation.charAt(calculation.length - 1))) {
    evaluation();
  }
});
