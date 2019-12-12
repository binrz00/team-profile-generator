const Employee = require("./Employee");
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
    this.school = school;
    }
getSchool(){
return this.school;
}
}
const ben = new Intern("ben",2,"test.com","UofM")
console.log(ben);
console.log(ben.getSchool());
console.log(ben.getRole());
