// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inqurier = require("inquirer")


const Engineer = function() {};

Engineer.prototype.prompt = function() {
    inqurier
    .prompt([
        {
            type: "input",
            message: "what is your github user name.",
            name: "name",
        }
        ])
};

module.exports = Engineer;