const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Describe your project:',
        },

        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used?',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'What tests run with your project?',
        },

        {
            type: 'input',
            name: 'contribute',
            message: 'How can people contribute to your project?',
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

        {
            type: "list",
            name: "license",
            message: "Choose your license:",
            choices: ["MIT", "Apache", "GPL", "BSD3"],
        },
    ]);
};

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

init();