"use strict";
//Calculator in Typescript using Terminal input
Object.defineProperty(exports, "__esModule", { value: true });
//import inquirer from "inquirer";
var prompt = require("prompt-sync")();
var num1 = parseInt(prompt("Enter the first number: "));
var num2 = parseInt(prompt("Enter the second number: "));
var operator = (prompt("enter operator(+, - , * or /):"));
if (operator = "+") {
    console.log("THE NUMBER OF".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(num1 + num2));
}
else if (operator = "-") {
    console.log("THE NUMBER OF".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(num1 - num2));
}
else if (operator = "*") {
    console.log("The multiplication of ".concat(num1, " ").concat(operator, " ").concat(num2, " =").concat(num1 * num2));
}
else if (operator = "/") {
    console.log("The division of ".concat(num1, " ").concat(operator, " ").concat(num2, " =").concat(num1 * num2));
}
else {
    console.log("please select correct operator");
}
;
