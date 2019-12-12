const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
    this.officeNumber=officeNumber; 
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
const becky = new Manager("becky",1,"email.com",8675309);
console.log(becky);
console.log(becky.getOfficeNumber());
console.log(becky.getRole());