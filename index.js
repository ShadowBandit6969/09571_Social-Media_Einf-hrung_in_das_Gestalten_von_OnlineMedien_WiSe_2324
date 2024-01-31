function calculate() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var num3 = parseFloat(document.getElementById("number3").value);
  var operation = document.querySelector('input[name="operation"]:checked');

  if (operation === null) {
    document.getElementById("result").innerHTML = "Please select the operation";
    return;
  }
  var result;
  switch (operation.value) {
    case "add":
      result = add(num1, num2, num3);
      break;
    case "subtract":
      result = subtract(num1, num2, num3);
      break;
    case "multiply":
      result = multiply(num1, num2, num3);
      break;
    case "divide":
      result = divide(num1, num2, num3);
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}

function add(a, b, c) {
  return a + b + c;
}

function subtract(a, b, c) {
  return a - b - c;
}

function multiply(a, b, c) {
  return a * b * c;
}

function divide(a, b, c) {
  if (b !== 0 && c !== 0) {
    return a / b / c;
  } else {
    return "Cannot divide by zero";
  }
}

document.getElementById("calculateButton").addEventListener("click", calculate);
