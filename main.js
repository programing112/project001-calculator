"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        type: "number",
        Name: "numberone",
        message: "Enter the first number: ",
    },
    {
        type: "number",
        Name: "numbertwo",
        message: "Enter the second number: ",
    },
    {
        type: "list",
        Name: "operator",
        message: "enter operator(+, -, * or /):",
        choices: ["+", "-", "*", "/"],
    }
]);
var numberone = answer.numberone, numbertwo = answer.numbertwo, operator = answer.operator;
if (numberone && numbertwo && operator) {
    var result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    else if (operator === "*") {
        result = numberone * numbertwo;
    }
    else {
        // division operation
        console.log("enter your right number");
    }
}
