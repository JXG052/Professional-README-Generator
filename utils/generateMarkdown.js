// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
 ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
${data.installation}
  
  ## Usage
  
${data.usage}  
  
 ![image of deployed site](${data.image})
  
 [Link to page](${data.link})
  
  
  ## Contributions
  
${data.credits}   

## Tests

${data.tests}
 
 ## License

 ${data.badge} 
 ${data.license}  

 ## Questions

 ${data.questions}

`
;
}

module.exports = generateMarkdown;
