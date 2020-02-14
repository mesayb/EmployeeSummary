const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

let manager = [];
let engineer = [];
let intern = [];
let status;


const managerQuestions = ["Please enter Manager's Name?", "Please enter Manager's ID?", "Please Enter Manager's Email : ","Please enter Manager's office number?"];
const engineerQuestions = ["Please enter Engineer's Name?", "Please enter Engineer's ID?",  "Please Enter Engineer's Email : ","Please enter Engineer's GitHub username?"];
const internQuestions = ["Please enter Intern's Name?", "Please enter Intern's ID?", "Please Enter Intern's Email : ", "what school is Intern from?"];

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

    await askQuestion();
}

async function askQuestion() {

    await generateQuestionByTitle();

    if (status === 'Engineer') {
        await engineerQuestioner()

        await  askQuestion()
    } else
    if (status === 'Intern') {
        await internQuestioner();

       await askQuestion();
    } else
    if (status === '---DONE---') {
        console.log('manager - ' + JSON.stringify(manager));
        console.log('engineer - ' + JSON.stringify(engineer));
        console.log('intern - ' + JSON.stringify(intern));
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
        new QuestionConstructor(managerQuestions[2], 'input', 'email'),
        new QuestionConstructor(managerQuestions[3], 'input', 'officeNumber'),
    ]).then((res) => {

        let mng = new Manager(res.name, res.id, res.email, res.officeNumber);
        manager.push(mng);

        return res;
    })
}


async function engineerQuestioner() {
    await inquirer.prompt([
        new QuestionConstructor(engineerQuestions[0], 'input', 'name'),
        new QuestionConstructor(engineerQuestions[1], 'input', 'id'),
        new QuestionConstructor(managerQuestions[2], 'input', 'email'),
        new QuestionConstructor(engineerQuestions[3], 'input', 'gitHub'),
    ]).then((res) => {
        let eng = new Engineer(res.name, res.id, res.email, res.gitHub);
        engineer.push(eng);

        return res;
    });
}

async function internQuestioner() {
    await inquirer.prompt([
        new QuestionConstructor(internQuestions[0], 'input', 'name'),
        new QuestionConstructor(internQuestions[1], 'input', 'id'),
        new QuestionConstructor(managerQuestions[2], 'input', 'email'),
        new QuestionConstructor(internQuestions[3], 'input', 'school'),
    ]).then((res) => {
        let int = new Intern(res.name, res.id, res.email, res.school);
        intern.push(int);

        return res;
    })
}

async function generateHTML() {

}

module.exports = {
    testKicker,
    generateHTML,
    manager,
    engineer,
    intern
}