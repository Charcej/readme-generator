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
# ${data.title}
## Description / Purpose
${data.description}
## This Version
${data.version}
## Built With:
${data.languages}
## Installation
${data.install}
## Usage
${data.usage}

## Credits
${data.contribute}
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: 
[${data.email}](mailto:${data.email})
## License
### [${data.license}](${licenseLink})
  `
}

module.exports = generateMarkdown;
