function getOutput() {
  return document.getElementById("output").innerText;
}
function getHistory() {
  return document.getElementById("history").innerText;
}
function printOutput(num) {
  document.getElementById("output").innerText = num;
}
function printHistory(num) {
  document.getElementById("history").innerText = num;
}
const numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener("click", function () {
    let output = getOutput();
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
    if (output == 0) {
      printOutput(output.substring(1));
    }
  });
}
const operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
  const operator = operators[i];
  operator.addEventListener("click", function () {
    let output = getOutput();
    let history = getHistory();
    switch (operator.id) {
      case "clear":
        printOutput("");
        printHistory("");
        break;
      case "delete":
        output = output.substring(0, output.length - 1);
        printOutput(output);
        break;
      default:
        if (output != "") {
          output = output;
          history = history + output;
          if (operator.id == "=") {
            let result = eval(history);
            printOutput(result);
            printHistory("");
          } else {
            history = history + operator.id;
            printHistory(history);
            printOutput("");
          }
        }
        break;
    }
  });
}
