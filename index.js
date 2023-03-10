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
    "Enter what you would like to include in the credits",
    "What liicense would you like to use?",
    "Enter what you would like to include in the tests",
    "Enter what you would like to include in the questions section"
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

function fetchLicenseBadge(license) {
    let badge;
    switch (license) {
        case "MIT": 
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            break;
        case "Mozilla":
            badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
            break;
        case "IBM":
            badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    return badge;
}

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
        choices: ['MIT', 'Mozilla', 'IBM'],
    },
    {
        "type": "input",
        "message": questions[8],
        "name": "tests",
    },
    {
        "type": "input",
        "message": questions[9],
        "name": "questions",
    },

]).then((response) => {
    
    let badge = fetchLicenseBadge(response.license)
    response.badge = badge
    writeToFile("README.md", response)
    
})
