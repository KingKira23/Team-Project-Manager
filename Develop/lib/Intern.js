// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// const Intern = function() {};

// Intern.prototype.arrayPass = function(res, addRes) {
    
//     const name = res.name;
//     const email = res.email;
//     const role = res.role;
//     const id = res.id;
//     const github = addRes.github
    
// };

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(id,name,email);
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;