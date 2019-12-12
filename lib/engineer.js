const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
    this.github = github;
    }
    getGithub(){
    // const link = `https://github.com/${this.github}`;
    // return link;
    return this.github;

    }
}
const mike = new Engineer("mike",4,"test.com","mikerocks")
console.log(mike);
console.log(mike.getRole());
console.log(mike.getGithub());