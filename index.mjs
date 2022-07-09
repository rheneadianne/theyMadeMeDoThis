import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project called?",
            name: "title"
        },
        {
            type: "input",
            message: "Please describe your project.",
            name: "description"
        },
        {
            type: "input",
            message: "How do you install your application?",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you use your application?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed to the project?",
            name: "contributed"
        },
        {
            type: "input",
            message: "How can other people contribute to this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "How would you test that your application is working properly?",
            name: "testing"
        },
        {
            type: "input",
            message: "Which license is this project covered under?",
            name: "license"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "gitUser"
        },
        {
            type: "input",
            message: "What is the email you would like use for any questions about the project?",
            name: "email"
        }
    ])
    .then( data => {
        console.log(data.title, data.description, data.installation, data.usage, data.contribution, data.testing, data.license, data.gitUser, data.email)
    })