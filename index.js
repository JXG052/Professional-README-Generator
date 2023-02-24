const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the name of your Project?",
    "Enter a Description",
    "What is this project used for?"
];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

inquirer.prompt([
    {
        "type": "input",
        "message": "Enter Something",
        "name": "test"
    }
]).then((response) => {
    console.log(response);
    fs.writeFile("test.JSON", JSON.stringify(response), (error) =>
    error ? console.error(error) : console.log("success") )
})
