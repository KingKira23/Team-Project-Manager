const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray = []
// function whoIsYou() {
// inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "how many employees would you like to add.",
//             name: "employeeNum"
//         }
//     ])
//     .then(function (res) {
//         for (i = 0; i <= parseInt(res.employeeNum); i++) {
function addEmployee() {
    inquirer

        .prompt([
            {
                type: "input",
                message: "what is your name.",
                name: "name",
            }, {

                type: "list",
                message: "what is your role",
                choices: ["Manager", "Engineer", "Intern"],
                name: "role",
            }, {

                type: "input",
                message: "what is your email",
                name: "email",
            }, {

                type: "input",
                message: "what is your ID",
                name: "id",
            }
        ])
        .then(function (res) {

            if (res.role === "Engineer") {

                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "what is your github",
                            name: "github",
                        }
                    ])
                    .then(function (addRes) {
                        let name = res.name
                        let email = res.email
                        let id = res.id
                        let github = addRes.github
                        const engineer = new Engineer(name, id, email, github)
                        employeeArray.push(engineer)
                        addAnother()
                        
                    })

            }
            else if (res.role === "Manager") {

                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "what is your office number",
                            name: "officeNumber",
                        }
                    ])
                    .then(function (addRes) {
                        let name = res.name
                        console.log(res.name)
                        let email = res.email
                        let id = res.id
                        let officeNumber = addRes.officeNumber
                        const manager = new Manager(name, id, email, officeNumber)
                        console.log(manager)
                        employeeArray.push(manager)
                        addAnother()
                        

                    })

            }
            else if (res.role === "Intern") {

                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "what is the school that you are going to",
                            name: "school",
                        }
                    ])
                    .then(function (addRes) {
                        let name = res.name
                        let email = res.email
                        let id = res.id
                        let school = addRes.school
                        const intern = new Intern(name, id, email, school)
                        employeeArray.push(intern)
                        addAnother()
                        
                    })

            }

        })
}

addEmployee()


function writeFile() {
    fs.writeFile("team.html", render(employeeArray), function (err) {
        if (err) throw err;
    })
}

function addAnother(){
    inquirer
        .prompt([
            {
                type: "list",
                message: "would you like to add someone else",
                choices: ["Yes", "No"],
                name: "add",
            }
        ])
        .then(function(res){
            if (res.add === "Yes") {
                addEmployee()
            }
            else{
                writeFile()
            }
            
        })
}


//     }

// })
        // }
        // whoIsYou()

        // Write code to use inquirer to gather information about the development team members,
        // and to create objects for each team member (using the correct classes as blueprints!)

        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!

        // After you have your html, you're now ready to create an HTML file using the HTML
        // returned from the `render` function. Now write it to a file named `team.html` in the
        // `output` folder. You can use the variable `outputPath` above target this location.
        // Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
