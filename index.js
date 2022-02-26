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
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter the title of your peoject.');
                  return false;
                }
              }
            },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description and / or purpose of your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a description of your project.');
                  return false;
                }
              }
            },
        {
            type: 'input',
            name: 'version',
            message: 'Please detail this version of your project:',
            validate: versionInput => {
                if (versionInput) {
                  return true;
                } else {
                  console.log('Please detail the version of this project.');
                  return false;
                }
              }
            },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: [' JavaScript', ' HTML', ' CSS', ' ES6', ' jQuery', ' Bootstrap', ' Node']
        },

        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please explain how to install your project.');
                  return false;
                }
              }
            },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project used? Feel free to include code of a screenshot:',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please explain how to use your project and / or include a screenshot.');
                  return false;
                }
              }
            },
        {
            type: 'input',
            name: 'contribute',
            message: 'What is the name of the contributor to this project?',
            validate: contributeInput => {
                if (contributeInput) {
                  return true;
                } else {
                  console.log('Please provide a name for a contributor to your project.');
                  return false;
                }
              }
            },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub user name of the contributor?',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter a GitHub user name.');
                  return false;
                }
              }
            },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the contributor?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter the email address of the contributor.');
                  return false;
                }
              }
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