import inquirer from "inquirer";

const answer : {
    numberone:number,
    numbertwo:number,
    operator:string,
} = await inquirer.prompt([
    {
        type:"number",
        Name:"numberone",
        message:"Enter the first number: ",
 },
 {
    type:"number",
    Name:"numbertwo",
    message:"Enter the second number: ",
 },
 {
    type:"list",
    Name:"operator",
    message:"enter operator(+, -, * or /):",
    choices:["+","-","*","/"],
 }
]);
 const {numberone,numbertwo,operator}=answer;
 if(numberone && numbertwo && operator){
    let  result:number=0;
    if(operator==="+"){
       result=numberone + numbertwo;  
    }else if (operator === "-"){
        result=numberone - numbertwo;
    }else if(operator === "*"){
         result=numberone * numbertwo;
     } else {
         // division operation
         console.log("enter your right number");

    }
 
}
