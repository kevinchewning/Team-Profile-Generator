//Requirements for script
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

class Generator {
    constructor() {
        //Inquirer questions
        //Manager
        this.managerQ = [
            {
                type: 'input',
                message: `Welcome to the team roster generator!
                Please enter the manager's name:`,
                name: 'name',
                validate: (input) => {
                    if (typeof input !== 'string') {
                        return 'Please enter a name';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "Please enter employee's ID:",
                name: 'id',
                validate: (input) => {
                    if (isNaN(input)) {
                        return 'Please enter a number';
                    } else {
                        return true;  
                    }
                }
            },
            {
                type: 'input',
                message: "Please enter employee's email:",
                name: 'email',
                validate: (input) => {
                    if (!input.includes('@') || !input.includes('.')) {
                        return 'Please enter a valid email address';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: `Please enter manager's ten digit office phone number:
                (Please use number only, no hyphen or parentheses.)`,
                name: 'officeNumber',
                validate: (input) => {
                    if (isNaN(input)) {
                        return 'Please use numbers only';
                    } else if(input.length !== 10) {
                        return 'Please enter ten digits';
                    } else {
                        return true;
                    }
                }
            },
        ];

        //Engineer
        this.engineerQ = [
            {
                type: 'input',
                message: `Please enter the engineer's name:`,
                name: 'name',
                validate: (input) => {
                    if (typeof input !== 'string') {
                        return 'Please enter a name';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "Please enter engineer's ID:",
                name: 'id',
                validate: (input) => {
                    if (isNaN(input)) {
                        return 'Please enter a number';
                    } else {
                        return true;  
                    }
                }
            },
            {
                type: 'input',
                message: "Please enter engineer's email:",
                name: 'email',
                validate: (input) => {
                    if (!input.includes('@') || !input.includes('.')) {
                        return 'Please enter a valid email address';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: `Please enter the engineer's Github username:`,
                name: 'github',
                validate: (input) => {
                    if (typeof input !== 'string') {
                        return 'Please enter a name';
                    } else {
                        return true;
                    }
                }
            }
        ]

        //Intern
        this.internQ = [
            {
                type: 'input',
                message: `Please enter the intern's name:`,
                name: 'name',
                validate: (input) => {
                    if (typeof input !== 'string') {
                        return 'Please enter a name';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "Please enter intern's ID:",
                name: 'id',
                validate: (input) => {
                    if (isNaN(input)) {
                        return 'Please enter a number';
                    } else {
                        return true;  
                    }
                }
            },
            {
                type: 'input',
                message: "Please enter intern's email:",
                name: 'email',
                validate: (input) => {
                    if (!input.includes('@') || !input.includes('.')) {
                        return 'Please enter a valid email address';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: `Please enter the intern's school:`,
                name: 'school',
                validate: (input) => {
                    if (typeof input !== 'string') {
                        return 'Please enter a name';
                    } else {
                        return true;
                    }
                }
            }
        ]

        //Create empty array to push new employees to
        this.roster = [];
    }

    registerManager() {
        inquirer
        .prompt(this.managerQ)
        .then((response) => {
            const manager = new Manager;

            manager.name = response.name
            manager.id = response.id
            manager.email = response.email  
            manager.officeNumber = response.officeNumber.slice(0,3) + "-" + response.officeNumber.slice(3,6) + "-" + response.officeNumber.slice(6,10)

            this.roster.push(manager);

            this.newEmployee();
        })
    }

    registerEngineer() {
        inquirer
        .prompt(this.engineerQ)
        .then((response) => {
            const engineer = new Engineer;

            engineer.name = response.name
            engineer.id = response.id
            engineer.email = response.email
            engineer.github = response.github

            this.roster.push(engineer);

            this.newEmployee();
        })
    }

    registerIntern() {
        inquirer
        .prompt(this.internQ)
        .then((response) => {
            const intern = new Intern;

            intern.name = response.name
            intern.id = response.id
            intern.email = response.email
            intern.school = response.school

            this.roster.push(intern);

            this.newEmployee();
        })
    }

    newEmployee() {
        inquirer
        .prompt([
            {
                type: 'list',
                message: `What would you like to do next?`,
                choices: ['Add Engineer', 'Add Intern', 'Generate team roster HTML'],
                name: 'nextStep'
            }
        ])
        .then((response) => {
            if (response.nextStep === 'Add Engineer') {
                this.registerEngineer();
            } else if (response.nextStep === 'Add Intern') {
                this.registerIntern();
            } else if (response.nextStep === 'Generate team roster HTML' && this.roster.length < 5) {
                console.log('Team roster must contain at least 5 members');
                this.newEmployee();
            } else {
                this.createHTML();
            }
        })
    };

    createHTML() {
        let header = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="./style.css" rel="stylesheet">

        <title>Team Roster</title>
    </head>

    <body>
        <header>
            <h1>Team Roster</h1>
        </header>

        <main>
        `;

        this.writeToFile('./dist/index.html', header);

        this.renderEmployee();
    };

    renderEmployee() {
        for(let i = 0; i < this.roster.length; i++) {
            if (this.roster[i].role === 'Manager') {
                let employee = `            
            <div class="card">
                <div class="card-header">
                    <h2 class="name">${this.roster[i].name}</h2>
                    <h3 class="role">${this.roster[i].role}</h3>
                </div>
                <div class="info-container">
                    <p class="info">Employee ID: ${this.roster[i].id}</p>
                    <p class="info">Email: <a href="mailto:${this.roster[i].email}">${this.roster[i].email}</a></p>
                    <p class="info">Office Phone: <a href="tel:${this.roster[i].officeNumber}">${this.roster[i].officeNumber}</a></p>
                </div>
            </div>
            `;

            this.appendFile('./dist/index.html', employee);

            } else if (this.roster[i].role === 'Engineer') {
                let employee = `            
            <div class="card">
                <div class="card-header">
                    <h2 class="name">${this.roster[i].name}</h2>
                    <h3 class="role">${this.roster[i].role}</h3>
                </div>
                <div class="info-container">
                    <p class="info">Employee ID: ${this.roster[i].id}</p>
                    <p class="info">Email: <a href="mailto:${this.roster[i].email}">${this.roster[i].email}</a></p>
                    <p class="info">Github: <a href="https://github.com/${this.roster[i].github}">${this.roster[i].github}</a></p>
                </div>
            </div>
            `

            this.appendFile('./dist/index.html', employee);

            } else {
                let employee = `
            <div class="card">
                <div class="card-header">
                    <h2 class="name">${this.roster[i].name}</h2>
                    <h3 class="role">${this.roster[i].role}</h3>
                </div>
                <div class="info-container">
                    <p class="info">Employee ID: ${this.roster[i].id}</p>
                    <p class="info">Email: <a href="mailto:${this.roster[i].email}">${this.roster[i].email}</a></p>
                    <p class="info">School: ${this.roster[i].school}</p>
                </div>
            </div>
            `

            this.appendFile('./dist/index.html', employee);

            }
        }

        setTimeout(this.renderFooter.bind(this), 1000);
    }

    renderFooter() {
        let footer = `
            </main>
        </body>
    </html>
    `

        this.appendFile('./dist/index.html', footer);
    }

    writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    }

    appendFile(fileName, data) {
        fs.appendFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    }
}

module.exports = Generator;