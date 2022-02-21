const generateMarkdown = data => {
  
  let licenseLink = '';
  
  switch(data.license) {
    case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT';
    break;

    case 'Apache': licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
    break;

    case 'GPL': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

    case 'BSD3': licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    break;

    default: licenseLink = 'This app has no license.'
  }
  
  return `
[![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
# ${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)
## Installation
${data.install}
## Tests
${data.tests}
## Usage
${data.usage}
## Contributing
${data.contribute}
## License
### This app is licensed under the [${data.license}](${licenseLink}) license.
## Questions
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: 
[${data.email}](mailto:${data.email})
  `
}

module.exports = generateMarkdown;
