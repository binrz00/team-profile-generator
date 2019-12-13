const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const questionsM = [{
    message: "what is your name?",
    name: "name"
},{
    message: "what is your ID?",
    name: "id"
},{
    message: "what is your Email address?",
    name: "email"
},
{message: "what is your office phone number?",
name:"officeNumber"
}];
const questionsE = [{
    message: "what is your name?",
    name: "name"
},{
    message: "what is your ID?",
    name: "id"
},{
    message: "what is your Email address?",
    name: "email"
},{
    message: "what is your github username?",
    name:"github"
}]
const questionsI = [{
    message: "what is your name?",
    name: "name"
},{
    message: "what is your ID?",
    name: "id"
},{
    message: "what is your Email address?",
    name: "email"
},{
    message: "what school did you attend?",
    name: "school"
}]
inquirer.prompt(
    [{
    message: "what is your role?",
    name: "role"
}]
).then(function(res){
console.log(res.role);
if(res.role === "manager"){
 makeManager();
    
}
if (res.role === "engineer"){
 makeEngineer();

}
if(res.role === "intern"){
 makeIntern();
}
})

function makeManager(){
inquirer.prompt(questionsM)
.then(function(resM){
    console.log(resM);
})
}
function makeEngineer(){
    inquirer.prompt(questionsE)
    .then(function(resE){
        console.log(resE);
    })
}
function makeIntern(){
    inquirer.prompt(questionsI)
    .then(function(resI){
        console.log(resI);
    })
}
