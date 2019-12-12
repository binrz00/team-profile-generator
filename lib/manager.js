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
const Jenny = new Manager("Jenny",1,"email.com",8675309);
console.log(Jenny);
console.log(Jenny.getOfficeNumber());
console.log(Jenny.getRole());