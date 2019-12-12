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
module.exports = Engineer;