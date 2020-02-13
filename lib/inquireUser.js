const inquirer = require('inquirer');
const fs = require('fs');

let employeeDB = [];
let manager = [];
let engineer = [];
let intern = [];
let status; 


const managerQuestions = ["Please enter Manager's Name?", "Please enter Manager's ID?", "Please enter Manager's office number?"];
const engineerQuestions = ["Please enter Engineer's Name?", "Please enter Engineer's ID?", "Please enter Engineer's GitHub username?"];
const internQuestions = ["Please enter Intern's Name?", "Please enter Intern's ID?", "what school is Intern from?"];

//question constructor
function QuestionConstructor(question, inputType, name, choices) {
    this.message = question;
    this.type = inputType;
    this.name = name;
    this.choices = choices;
};

//execution starts here
// testKicker();

async function testKicker() {
    await managerQuestioner();
    console.log('manager - ' + JSON.stringify(manager));
    await askQuestion();
}

async function askQuestion() {

    await generateQuestionByTitle();

    if (status === 'Engineer') {
        await engineerQuestioner()
        console.log('engineer - ' + JSON.stringify(engineer));
        askQuestion()
    } else
    if (status === 'Intern') {
        await internQuestioner();
        console.log('intern - ' + JSON.stringify(intern));
        askQuestion();
    } else
    if (status === '---DONE---') {
        console.log('done now I will generate a page');
    }
}

async function generateQuestionByTitle() {
    await inquirer.prompt([new QuestionConstructor('Please enter your Title?', 'list', 'title', ['Engineer', 'Intern', '---DONE---'])]).then((res) => {
        status = res.title;
    })
}

async function managerQuestioner() {
    await inquirer.prompt([
        new QuestionConstructor(managerQuestions[0], 'input', 'name'),
        new QuestionConstructor(managerQuestions[1], 'input', 'id'),
        new QuestionConstructor(managerQuestions[2], 'input', 'officeNumber'),
    ]).then((res) => {
        manager.push({
            ...{
                title: 'Manager'
            },
            ...res
        });
        return res;
    })
}


async function engineerQuestioner() {
    await inquirer.prompt([
        new QuestionConstructor(engineerQuestions[0], 'input', 'name'),
        new QuestionConstructor(engineerQuestions[1], 'input', 'id'),
        new QuestionConstructor(engineerQuestions[2], 'input', 'gitHub'),
    ]).then((res) => {
        engineer.push(res);
        return res;
    });
}

async function internQuestioner() {
    await inquirer.prompt([
        new QuestionConstructor(internQuestions[0], 'input', 'name'),
        new QuestionConstructor(internQuestions[1], 'input', 'id'),
        new QuestionConstructor(internQuestions[2], 'input', 'school'),
    ]).then((res) => {
        intern.push(res);
        return res;
    })
}

async function generateHTML(){

}

module.exports = {
    testKicker,
    generateHTML,
    manager,
    engineer,
    intern
}