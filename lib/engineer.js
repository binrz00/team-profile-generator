const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(github){
this.github = github;
    }
    getGithub(){
    const link = `https://github.com/${this.github}`;
    
    }
}