// Parent class of Employee (it will be extended to other classes later on)
class Employee {
    // Constructor function for name, id, and email since all employees have these
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    // Below are four methods for all employees, one for their name, their id, their email, and then lastly, their role (which will be overriden for each employee depending on their role)

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'; 
    }
}


module.exports = Employee;