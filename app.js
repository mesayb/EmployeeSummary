const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const {testKicker, manager, engineer, intern} = require('./lib/inquireUser');

testKicker();
engineer.forEach(eng =>{
    console.log('eng = '+eng);
})

