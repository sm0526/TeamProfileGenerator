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
    
}