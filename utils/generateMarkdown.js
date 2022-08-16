// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenceLink = (license) => {
  if (license !== "None") {
    return `* [License](#license)`
  } else {
    return ""
  }
};

// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![Github licence](http://img.shields.io/badge/license-${(license)}-blue.svg)`
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `## License 
    This project is licensed under ${license}
    `
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenceLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ## Contributing 
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
