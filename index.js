// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    "What is the project title?", 
    "Provide a project description",
    "Provide installation instructions",
    "What is the usage case for the project?",
    "What license is used?",
    "Provide contribution instructions",
    "What test instructions are there for the project?",
    "What is your GitHub username?",
    "What is your email address?",
];

const questionsArr = [
    {
        type: "input",
        name: "title",
        message: questions[0]
    },
    {
        type: "input",
        name: "description",
        message: questions[1]
    },
    {
        type: "input",
        name: "installation",
        message: questions[2] 
    },
    {
        type: "input",
        name: "usage",
        message: questions[3]
    },
    {
        type: "list",
        name: "license",
        message: questions[4],
        choices: ["MIT", "GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "none"],
    },
    {
        type: "input",
        name: "contributing",
        message: questions[5]
    },
    {
        type: "input",
        name: "tests",
        message: questions[6]
    },
    {
        type: "input",
        name: "github",
        message: questions[7]
    },
    {
        type: "input",
        name: "email",
        message: questions[8]
    }
];
// TODO: Create a function to write README file
function writeToFile(readMeContent, data) {
    fs.writeFile(data.title.split(" ").join("") + "-README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README file!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questionsArr)
        .then(function (data) {
            console.log(data);
            const readMeContent = generateMarkdown(data)
            writeToFile(readMeContent, data);
        })

}


// Function call to initialize app
init();

