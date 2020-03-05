// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// const Manager = function() {};

// Manager.prototype.arrayPass = function(res, addRes) {
    
//     const name = res.name;
//     const email = res.email;
//     const role = res.role;
//     const id = res.id;
//     const github = addRes.github

//     console.log(name)
    
// };
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(id,name,email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;