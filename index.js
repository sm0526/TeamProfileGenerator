//set up requirements
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const render = require('./src/page-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//set up global variables/objects
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const idArray = [];
const teamMembers = [];
//instructions to reset
console.log(
    '\nUse `npm run reset` to reset the dist folder\n'
);
//functions
function appMenu() {
    function constructManager() {
        console.log('Build your Team');
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'Who is the team manager?',
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        } else {
                            return 'Enter at least one character';
                        };
                    },
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'What is the id of the team manager?',
                    validate: (answer) => {
                        const qualify = answer.match(/^[1-9]\d*$/);
                        if (qualify) {
                            return true;
                        } else {
                            return 'Enter a number greater than zero';
                        };
                    },
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "What is the manager's email address?",
                    validate: (answer) => {
                        const qualify = answer.match(/\S+@\S+\.\S+/);
                        if (qualify) {
                            return true;
                        } else {
                            return 'Enter a valid email address';
                        };
                    },
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: "What is the manager's office number?",
                    validate: (answer) => {
                        const qualify = answer.match(/^[1-9]\d*$/);
                        if (qualify) {
                            return true;
                        } else {
                            return 'Enter a number greater than zero';
                        };
                    },
                },
            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamMembers.push(manager);
                idArray.push(answers.managerId);
                constructTeam();
            });
    }
    function constructTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'memberChoice',
                    message: "Which type of team member would you like to add to your team?",
                    choices: [
                        'Engineer',
                        'Intern',
                        'My team is Complete',
                    ],
                },
            ])
            .then((userChoice) => {
                switch (userChoice.memberChoice) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
    }
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: "engineerName",
                    message: "What is the name of your engineer?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        } else {
                            return "Enter at least one character";
                        };
                    },
                },
                {
                    type: 'input',
                    name: "engineerId",
                    message: "What is the enginee's id number?",
                    validate: (answer) => {
                        const qualify = answer.match(/^[1-9]\d*$/);
                        if (qualify) {
                            if (idArray.includes(answer)) {
                                return "This ID is already in use";
                            } else {
                                return true;
                            }
                        }
                        return "Please enter a number greater than zero";
                    },
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the engineer's email address?",
                    validate: (answer) => {
                        const qualify = answer.match(/\S+@\S+\.\S+/);
                        if (qualify) {
                            return true;
                        } else {
                            return 'Enter a valid email address';
                        };
                    },
                },
                {
                    type: 'input',
                    name: 'engineerGitHub',
                    message: "What is the engineer's GitHub username?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        } else {
                            return "Enter at least one character";
                        };
                    },
                },
            ])
            .then((answers) => {
                const engineer = new Engineer(
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGitHub
                );
                teamMembers.push(engineer);
                idArray.push(answers.engineerId);
                createTeam();
            });
    }
    function addIntern() {
        inquirer
            .promt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is the name of your intern?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        } else {
                            return 'Enter at least one character';
                        };
                    },
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is your intern's id?",
                    validate: (answer) => {
                        const qualify = answer.match(/^[1-9]\d*$/);
                        if (qualify) {
                            if (idArray.includes(answer)) {
                                return 'This ID is already in use';
                            } else {
                                return true;
                            }
                        }
                        return 'Enter a number greater than zero.';
                    },
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is the intern's email address?",
                    validate: (answer) => {
                        const qualify = answer.match(/\S+@\S+\.\S+/);
                        if (qualify) {
                            return true;
                        } else {
                            return "Enter a valid email address";
                        };
                    },
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "Where is your intern going to school?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        } else {
                            return "Enter at least one character";
                        };
                    },
                },
            ])
    }
}