// Link to the Employee parent class
const Employee = require('./employee.js'); 

// Create Manager class that extends Employee parent class
class Manager extends Employee {
    // Constructor function for name, id, email, and officeNumber
    constructor(name, id, email, officeNumber) {
        super(name, id, email); // Obtained from the parent class Employee
        this.officeNumber = officeNumber; // officeNumber is unique to Intern, so it is not in super(...)
    }

    // Method to return officeNumber (all other methods, such as getName(), come from the parent class Employee)
    getOfficeNumber() {
        return this.officeNumber;
    }

    // getRole() from parent class needs to be overriden to return 'Manager', not just 'Employee'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;