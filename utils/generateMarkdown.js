// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else if (license === "MIT") {
    return "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPLv3") {
    return "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/gpl-3.0)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License
    ${license}`;
  }
}

function renderImage(image, imageAlt) {
  if (image === " ") {
    return "";
  } else {
    return `![${imageAlt}](./assets/${image})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing) 
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)
  
  
  ## Description
  ${data.description}

  ${renderImage(data.image, data.imageAlt)}
  
  ## Installation
  ${data.installation}
  
  ## Usage    
  ${data.usage}
  
  ## Contributing 
  ${data.contributing}
  
  ## Tests 
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  - [GitHub profile](https://github.com/${data.github})
  - Contact Me at ${data.email} with additional questions`;
}

module.exports = generateMarkdown;
