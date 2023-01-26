// Link to the Employee parent class
const Employee = require('./employee.js'); 

// Create Engineer class that extends Employee parent class
class Engineer extends Employee {
    // Constructor function for name, id, email, and GitHub
    constructor(name, id, email, github) {
        super(name, id, email); // Obtained from the parent class Employee
        this.github = github; // github is unique to Engineer, so it is not in super(...)
    }

    // Method to return GitHub (all other methods, such as getName(), come from the parent class Employee)
    getGithub() {
        return this.github;
    }

    // getRole() from parent class needs to be overriden to return 'Engineer', not just 'Employee'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;