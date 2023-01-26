// Function generateManager makes a bootstrap-style card for the manager by referencing their name, role, id, email, and officeNumber
const generateManager = manager => {
    return `
        <div class="card col-3 m-2 p-0">
            <div class="card-header">
            Name: ${manager.getName()} <br>
            <b>👨‍💼 ${manager.getRole()} </b>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    `
}

// Function generateEngineer makes a bootstrap-style card for an engineer by referencing their name, role, id, email, and GitHub
const generateEngineer = engineer => {
    return `
        <div class="card col-3 m-2 p-0">
            <div class="card-header">
            Name: ${engineer.getName()} <br>
            <b>👩‍💻 ${engineer.getRole()} </b>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    `
}

// Function generateIntern makes a bootstrap-style card for an intern by referencing their name, role, id, email, and school
const generateIntern = intern => {
    return `
        <div class="card col-3 m-2 p-0">
            <div class="card-header">
            Name: ${intern.getName()} <br>
            <b>🙎‍♂️ ${intern.getRole()} </b>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    `
}

// generateTeamHTML is what will actually create the HTML for the team.html file using teamMemberCards as an input (as we will see below, this input is going to be an array of cards' HTML), so all the cards will populate 
const generateTeamHTML = teamMemberCards => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            />
            <link rel="stylesheet" href="./style.css" />
            <title>My Company's Team</title>
        </head>

        <body>
            <h1 class="text-center m-3">Our Company's Team</h1>
            <div class="row d-flex justify-content-center p-3">
                ${teamMemberCards}
            </div>
        </body>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"
        ></script>
        </html>
    `
}

// generateMemberCards executes with "data" as its input and it is what actually makes an array of all the HTML needed for the employee cards. Within this, we cycle through the data we get from the user input and we use the above functions (generateManager, generateEngineer, generateIntern) to generate HTML for cards for managers, engineers, and interns, and then add that HTML to an array
generateMemberCards = (data) => {
    // Declare an empty array of cards
    var arrayOfCards = [];

    // For loop iterates the number of times as employees inputted
    for (var i=0; i < data.length; i++) {
        // Sets employeeInfo to the [i]th position of the array of data
        const employeeInfo = data[i];
        
        // Sets employeeRole to the role of the [i]th position/person using the getRole() method
        const employeeRole = employeeInfo.getRole();  

        // If the employee is manager, then make manager card using the generateManager function we created above
        if (employeeRole === 'Manager') {
            const managerHTMLCard = generateManager(employeeInfo);

            // Adds that HTML to the arrayOfCards
            arrayOfCards.push(managerHTMLCard);
        }

        // If the employee is engineer, then make engineer card using the generateEngineer function we created above
        if (employeeRole === 'Engineer') {
            const engineerHTMLCard = generateEngineer(employeeInfo);

            // Adds that HTML to the arrayOfCards
            arrayOfCards.push(engineerHTMLCard);
        }

        // If the employee is intern, then make intern card using the generateIntern function we created above
        if (employeeRole === 'Intern') {
            const internHTMLCard = generateIntern(employeeInfo);

            // Adds that HTML to the arrayOfCards           
            arrayOfCards.push(internHTMLCard);
        }
    }

    // Uses the generateTeamHTML function to generate the full HTML for the team.html page using the arrayOfCards (which now contains all the HTML for the cards of every single employee)
    return generateTeamHTML((arrayOfCards.join('')));
}

module.exports = generateMemberCards;