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