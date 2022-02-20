// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = readmeData => { 
    if (!readmeData) {
        readmeData = [];
    }
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)', 
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of your project.');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Please describe the purpose of this project (Required)',
        validate: purposeInput => {
            if (purposeInput) {
              return true;
            } else {
              console.log('Please enter a description of the purpose of this project.');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'version',
        message: 'Please describe this version (Required)',
        validate: versionInput => {
            if (versionInput) {
              return true;
            } else {
              console.log('Please describe the version of this project.');
              return false;
            }
          }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What languages were used to build this project? (Check all that apply)',
        choices: ['HTML', 'CSS', 'JavaScript', 'ES6', 'jQuery', 'Bootstrap', 'Node,' ]
    },
    {
        type: 'input',
        name: 'website',
        message: 'Please include a link to the deployed website (Required',
        validate: webInput => {
            if (webInput) {
              return true;
            } else {
              console.log('Please include a link to the deployed website.');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please include the code for a screenshot',
        validate: screenInput => {
            if (screenInput) {
              return true;
            } else {
              console.log('Please include code for a screenshot.');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'contribution', 
        message: 'What is the name of the contributor(s)?',
        validate: contributeInput => {
            if (contributeInput) {
              return true;
            } else {
              console.log('Please enter name for the contributor(s).');
              return false;
            }
          }
    }
  ])
};


// TODO: Create a function to write README file
function writeToFile(generateMarkdown, readmeData) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
