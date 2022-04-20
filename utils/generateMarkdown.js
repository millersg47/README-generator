// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  } else {
    return `[![License](https://img.shields.io/badge/${license}.svg)](https://opensource.org/licenses/${license}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return ""
  } else {
    return "- [License](#License)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  } else {
    return `## License
    ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Tabel of Countents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing) 
  - [Tests](#Tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#Questions)
  
  
  ## Description
  ${data.description}
  
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
  ${data.github}
  Contact Me at ${data.email} with additional questions`;
}

module.exports = generateMarkdown;
