// Node modules
const fs = require('fs'); 
const inquirer = require('inquirer');

// Team profile classes (employee is not here since it is not directly used, but rather as a parent class for the three classes below)
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js')

// Import generateHTML to create page
const generateHTML = require('./src/generateHTML.js');
const { default: generate } = require('@babel/generator'); //WHAT IS THIS?? IT WAS AUTOMATICALLY ADDED

// Declare an empty array for the team members
const teamMembers = [];

// addManager function which is what uses inquirer to ask for the manager's information
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is manager name?',
            // Validate input to make sure an input is entered (same for all following prompts)
            validate: input => {
                if (input==="") {
                    console.log('You need to enter a manager name to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter manager id.',
            validate: input => {
                if (input==="") {
                    console.log('You need to enter an id to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager email?',
            validate: input => {
                if (input==="") {
                    console.log('You need to enter manager email to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter manager office number.',
            validate: input => {
                if (input==="") {
                    console.log('You need to enter an office number to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
    ]).then(managerInformation => { // After (hence the .then) the user inputs information, then process the manager's information 
        const {name, id, email, officeNumber} = managerInformation; // Set the information from above (name, id, email, officeNumber) = managerInformation
        const manager = new Manager(name, id, email, officeNumber);  // Create a new object ('manager') using the Manager class to create a new object with the inputted information
        teamMembers.push(manager); // Add this object to the array of team members
    }) 
};

// addNewEmployee function uses inquirer for adding a new employee (aside from the manager, so either an engineer or intern)
const addNewEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'position',
            message: `Let's add a new employee. What position does this new employee hold?`,
            choices: ['Intern', 'Engineer'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
            validate: input => {
                if (input==="") {
                    console.log('You need to enter a name to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?',
            validate: input => {
                if (input==="") {
                    console.log('You need to enter an id to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
            validate: input => {
                if (input==="") {
                    console.log('You need to enter an email to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the intern?',
            when: (input) => input.position === 'Intern', // Use 'when:' to only ask for the school of the intern if the input.position (so the new employee's position) is an intern, not an engineer
            validate: input => {
                if (input==="") {
                    console.log('You need to enter a school name to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer GitHub username?',
            when: (input) => input.position === 'Engineer', // Use 'when:' to only ask for the GitHub of the engineer if the input.position (so the new employee's position) is an engineer, not an intern
            validate: input => {
                if (input==="") {
                    console.log('You need to enter a GitHub username to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },

        // We want to ask if they want to add another employee or not (since only two employees including the manager are required)
        { 
            type: 'list',
            name: 'addAnotherEmployee',
            message:  'Would you like to add another employee (select yes) or have you finished creating your team (select no)?', 
            choices: ['Yes', 'No'],
        }
    ]).then(employeeInformation => { // After the user enter all the information, set employeeInformation equal to the information inputted
        const {position, name, id, email, school, github, addAnotherEmployee} = employeeInformation; 

        // Create newEmployee for the new employee's information
        var newEmployee;

        // If the position selected is Intern, then it will take the information related to the intern (name, id, email, school) and sets the newEmployee object using the Intern class 
        if (position === 'Intern') {
            newEmployee = new Intern (name, id, email, school);
            // Adds this object to the array of team members
            teamMembers.push(newEmployee); 
        }

        // If the position selected is Engineer, then it will take the information related to the engineer (name, id, email, github) and sets the newEmployee object using the Engineer class 
        if (position === 'Engineer') {
            newEmployee = new Engineer (name, id, email, github);
            // Adds this object to the array of team members
            teamMembers.push(newEmployee); 
        }

        // If they user selected yes to adding another employee, then it will rerun addNewEmployee using teamMembers as its input (so it contains the just-newly-entered employee's information as well). If they don't want to add another employee, it will return the teamMembers array 
        if (addAnotherEmployee === 'Yes') {
            return addNewEmployee(teamMembers); 
        } else {
            return teamMembers;
        }
    })
};

// writeToFile takes in 'data' and uses fs.writeFile to add 'data' to the team.html file. The input, 'data', will eventually be the full HTML with the cards etc.
const writeToFile = data => {
    fs.writeFile('./dist/team.html', data, (err) =>
         err ? console.error(err) : console.log('Success! Your team profile has been generated'));
};

// Run addManager(), then run addNewEmployee, then run generateHTML with teamMembers (array of team members) as its input, then writeToFile with the pageHTML as its input (the result of generateHTML). 
addManager()
    .then(addNewEmployee)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(pageHTML => { 
        return writeToFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });