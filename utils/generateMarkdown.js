// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
// const licenceBadge = (license) => {
//   if (license) {
//     return license
//   } else {
//     return ""
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)


  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is licensed under ${data.license}

  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
