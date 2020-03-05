// TODO: Write code to define and export the Employee class

// const Employee = function() {}

// Employee.prototype.array = function(name,email,id,) {


    
// };

class Employee {
    constructor (name, id, email){
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getRole(){
        return "Employee"
    }

    
}


module.exports = Employee;