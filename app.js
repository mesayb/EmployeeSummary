const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const {
    testKicker,
    manager,
    engineer,
    intern
} = require('./lib/inquireUser');
const {
    htmlGenerator
} = require('./lib/index');

let html;
let cards = '';

async function callCordinator() {
    await testKicker();

    await cardForEachRole();

    html = htmlGenerator(cards);

    await genFile(html)

}


async function cardForEachRole() {
    manager.forEach(mng => {

        cards += createCards(mng.getName(), mng.getRole(), mng.getId(), mng.getEmail(), mng.getOfficeNumber())

    })

    engineer.forEach(eng => {

        cards += createCards(eng.getName(), eng.getRole(), eng.getId(), eng.getEmail(), eng.getGithub());

    })

    intern.forEach(int => {

        cards += createCards(int.getName(), int.getRole(), int.getId(), int.getEmail(), int.getSchool());

    })




}

async function genFile(html) {
    fs.writeFile('./output/index.html', html, function (err) {
        if (err) {
            console.log('Error Generating file')
        }
    })

}

function createCards(name, title, id, email, rand) {
    let uniqueKey;
    let icon;
    switch (title) {
        case 'Manager':
            uniqueKey = 'Office Number';
            icon = '<i class="fas fa-user" style="font-size:24px"></i>'
            break;
        case 'Engineer':
            uniqueKey = 'GitHub User Name';
            icon = '<i class="fas fa-laptop" style="font-size:24px"></i>'
            break;
        case 'Intern':
            uniqueKey = 'School';
            icon = '<i class="fas fa-graduation-cap" style="font-size:24px"></i>';
            break;
    }

    let dynamicHTML = ` <div class="col-sm-4 ">
<div class="card text-white bg-primary mb-3 shadow-lg border rounded-lg" style="max-width: 18rem;">
    <div class="card-header">
        <h5 class="card-title">${name}</h5>
        <p class="card-title">${icon} ${title}</p>
    </div>
    <div class="cardlist">
    <ul class="list-group bg-white text-dark">

        <li class="list-group-item"><span class="font-weight-bold">ID</span> : ${id} </li>
        <li class="list-group-item"><span class="font-weight-bold">Email</span> : ${email} </li>
        <li class="list-group-item"><span class="font-weight-bold">${uniqueKey}</span> : ${rand}</li>
    </ul>
    </div>
</div>
</div>
`;
    return dynamicHTML
};

callCordinator();


