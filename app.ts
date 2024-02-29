//Calculator in Typescript using Terminal input

//import inquirer from "inquirer";
var prompt = require("prompt-sync")();

let num1 = parseInt(prompt ("Enter the first number: "));
let num2  = parseInt(prompt ("Enter the second number: "));

let operator = (prompt("enter operator(+, - , * or /):"));

if(operator = "+"){
    console.log (`THE NUMBER OF${num1} ${operator} ${num2} = ${num1+num2}`)
    

}else if (operator = "-"){
    console.log (`THE NUMBER OF${num1} ${operator} ${num2} = ${num1-num2}`)
}else if(operator = "*"){
    console.log(`The multiplication of ${num1} ${operator} ${num2} =${num1*num2}`)
}else if(operator =  "/") {
   console.log(`The division of ${num1} ${operator} ${num2} =${num1*num2}`)
}else{
    console.log("please select correct operator");
};

export{};
