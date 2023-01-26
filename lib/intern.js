// Link to the Employee parent class
const Employee = require('./employee.js'); 

// Create Intern class that extends Employee parent class
class Intern extends Employee {
    // Constructor function for name, id, email, and school
    constructor(name, id, email, school) {
        super(name, id, email); // Obtained from the parent class Employee
        this.school = school; // School is unique to Intern, so it is not in super(...)
    }

    // Method to return school (all other methods, such as getName(), come from the parent class Employee)
    getSchool() {
        return this.school;
    }

    // getRole() from parent class needs to be overriden to return 'Intern', not just 'Employee'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;