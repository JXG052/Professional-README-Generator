const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the name of your Project?",
    "Enter a Description",
    "Enter Installation instructions",
    "Enter Usage instructions",
    "Enter the relative path of the screenshot that you want to use in the README",
    "Enter the URL of the deployed site",
    "Enter what you would like too include in the credits"
];

// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) =>
    error ? console.error(error) : console.log("success"))
}

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

inquirer.prompt([
    {
        "type": "input",
        "message": questions[0],
        "name": "title"
    },
    {
        "type": "input",
        "message": questions[1],
        "name": "description"
    },
    {
        "type": "input",
        "message": questions[2],
        "name": "installation",
    },
    {
        "type": "input",
        "message": questions[3],
        "name": "usage",
    },
    {
        "type": "input",
        "message": questions[4],
        "name": "image",
    },
    {
        "type": "input",
        "message": questions[5],
        "name": "link",
    },
    {
        "type": "input",
        "message": questions[6],
        "name": "credits",
    },
    {
        "type": "list",
        "message": questions[7],
        "name": "license",
        choices: ['MIT', 'Other License', 'New Licensce'],
    }

]).then((response) => {
    console.log(response);
    response.license === 'MIT' ? response.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`: console.log("notMIT");
    console.log(response);
    writeToFile("README.md", response)
    // if response.choices == MIT, display this badge
    
  
})
