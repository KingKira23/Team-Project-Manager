// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");



// const Engineer = function() {};

// Engineer.prototype.arrayPass = function(res, addRes) {
    
//     const name = res.name;
//     const email = res.email;
//     const role = res.role;
//     const id = res.id;
//     const github = addRes.github

// };

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(id,name,email);
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;