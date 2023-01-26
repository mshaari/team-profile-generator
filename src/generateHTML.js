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

//Within this, we cycle through the data we get from the user input and we use the above functions to generate cards for managers, engineers, and interns, and then add those cards to an array
generateMemberCards = (data) => {
    var arrayOfCards = [];

    for (var i=0; i < data.length; i++) {
        const employeeInfo = data[i];
        const employeeRole = employeeInfo.getRole(); //call the method that we made 

        //If the employee is manager, then make manager card
        if (employeeRole === 'Manager') {
            const managerHTMLCard = generateManager(employeeInfo);

            arrayOfCards.push(managerHTMLCard);
        }

        //If the employee is engineer, then make engineer card
        if (employeeRole === 'Engineer') {
            const engineerHTMLCard = generateEngineer(employeeInfo);

            arrayOfCards.push(engineerHTMLCard);
        }

        //If the employee is intern, then make intern card
        if (employeeRole === 'Intern') {
            const internHTMLCard = generateIntern(employeeInfo);

            arrayOfCards.push(internHTMLCard);
        }
    }

    return generateTeamHTML((arrayOfCards.join('')));
}

//Since we have several cards, we want to create an array that contains each separate HTML 
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

module.exports = generateMemberCards;