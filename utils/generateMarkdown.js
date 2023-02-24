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
  
  
  ## Credits
  
${data.credits}    
 
 ## License
  
 ${data.license}  

`;
}

module.exports = generateMarkdown;
