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
            message: 'What is the title of your project?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description and / or purpose of your project:',
        },

        {
            type: 'input',
            name: 'version',
            message: 'Please detail this version of your project:',
        },

        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },

        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used? Feel free to include code of a screenshot:',
        },

        {
            type: 'input',
            name: 'contribute',
            message: 'What is the name of the contributor to this project?',
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