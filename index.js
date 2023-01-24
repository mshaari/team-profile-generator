// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// import the team profile classes
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js')

// import generateHTML to create page
const generateHTML = require('./src/generateHTML.js');
const { default: generate } = require('@babel/generator'); //WHAT IS THIS?? IT WAS AUTOMATICALLY ADDED

// declare an empty array for the team
const teamMembers = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is manager name?',
            // Validate input to make sure a title is entered (same for all following prompts)
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
            name: 'managerId',
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
            name: 'managerEmail',
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
                    console.log('You need to enter office number to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
    ]).then(managerInformation => { //process the information on the manager
        const {name, id, email, officeNumber} = managerInformation; //we need to set this information within this segment
        const manager = new Manager(name, id, email, officeNumber);  // uses the manager class to create a new object with the right information
        teamMembers.push(manager); //adds this object to the array of team members
    }) 
};

const addNewEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'position',
            message: 'What position does this new employee hold?',
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
            when: (input) => input.position === 'Intern',
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
            when: (input) => input.position === 'Engineer',
            validate: input => {
                if (input==="") {
                    console.log('You need to enter a GitHub username to continue!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'list',
            name: 'addAnotherEmployee',
            message:  'Would you like to add another employee or have you finished creating your team?', 
            choices: ['Yes', 'No'],
        }
    ]).then(employeeInformation => {
        const {position, name, id, email, school, github} = employeeInformation; //we need to set this information within this segment

        var newEmployee;

        if (position === 'Intern') {
            newEmployee = new Intern (name, id, email, school);
            teamMembers.push(newEmployee); //adds this object to the array of team members
        }

        if (position === 'Engineer') {
            newEmployee = new Engineer (name, id, email, github);
            teamMembers.push(newEmployee); //adds this object to the array of team members
        }

        if (addAnotherEmployee === 'Yes') {
            return addNewEmployee(teamMembers); //why do we need to do addNewEmployee(teamMembers);
        } else {
            return teamMembers;
        }
    })
};

const writeToFile = data => {
    fs.writeFile('./dist/team.html', data, (err) =>
         err ? console.error(err) : console.log('Success! Your team profile has been generated'));
};

addManager()
    .then(addNewEmployee)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(pageHTML => { //inside of this is whatever the product of generateHTML would be
        return writeToFile(pageHTML);
    })
    //handle with errors
