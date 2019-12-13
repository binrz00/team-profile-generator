// const Employee = require("./lib/Employee");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const mCardGen = require("./templates/manager-card");
const eCardGen = require("./templates/engineer-card");
const iCardGen = require("./templates/intern-card");
fs.readFile("templates/main.html","utf8",function(error,data){
    if(error){
        console.log(error)
    }
fs.writeFile("output/team.html",data,function(err){
    if(err){
     return   console.log(err)
    }
})
})
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

addMember = function(){
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
}
addMember();
function makeManager(){
inquirer.prompt(questionsM)
.then(function(resM){

const managerCard = mCardGen.managerCardGen(resM);
fs.appendFile("output/team.html",managerCard,function(err) {

    if (err) {
      return console.log(err);
    }
    });
    inquirer.prompt({message:"do you have another team member to add?",type: "confirm",name:"more"})
.then(function(res){
if (res.more===true){
    addMember();
}
else {return}
})
})
}
function makeEngineer(){
    inquirer.prompt(questionsE)
    .then(function(resE){
        const engineerCard = eCardGen.engineerCardGen(resE);
fs.appendFile("output/team.html",engineerCard,function(err) {

    if (err) {
      return console.log(err);
    }
    });
    inquirer.prompt({message:"do you have another team member to add?",type: "confirm",name:"more"})
    .then(function(res){
    if (res.more===true){
        addMember();
    }
    else {return}
    })
})
}
function makeIntern(){
    inquirer.prompt(questionsI)
    .then(function(resI){
        const internCard = iCardGen.internCardGen(resI);
        fs.appendFile("output/team.html",internCard,function(err) {
        
            if (err) {
              return console.log(err);
            }
            });
            inquirer.prompt({message:"do you have another team member to add?",type: "confirm",name:"more"})
            .then(function(res){
            if (res.more===true){
                addMember();
            }
            else {return}
    })
})
}

