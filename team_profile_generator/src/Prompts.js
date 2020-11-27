const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')
const buildSite = require('./buildSite')

function Prompts() {
  this.employees = []
}

Prompts.prototype.initializeProgram = function() {
  inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "Enter the team manager's name."
    },
    {
      type: 'text',
      name: 'id',
      message: "Enter the team manager's employee ID."
    },
    {
      type: 'text',
      name: 'email',
      message: "Enter the team manager's email address."
    },
    {
      type: 'text',
      name: 'officeNumber',
      message: "Enter the team manager's office number."
    }])
    .then(({ name, id, email, officeNumber }) => {
      manager = new Manager(name, id, email, officeNumber);
      this.employees.push(manager)
      this.showMenu()
    })
}

Prompts.prototype.showMenu = function() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an intern', 'Finish']
    }])
    // Check the selection and launch the appropriate function
    .then(({choice}) => {
      switch (choice) {
        case 'Add an engineer':
          this.addEngineer();
          break;
        case 'Add an intern':
          this.addIntern();
          break;
        case 'Finish':
          this.buildSite(this.employees);
          break
      }

    })
}

Prompts.prototype.addEngineer = function() {
  inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "Enter the engineer's name."
    },
    {
      type: 'text',
      name: 'id',
      message: "Enter the engineer's employee ID."
    },
    {
      type: 'text',
      name: 'email',
      message: "Enter the engineer's email address."
    },
    {
      type: 'text',
      name: 'github',
      message: "Enter the engineer's github profile."
    }])
    .then(({ name, id, email, github }) => {
      engineer = new Engineer(name, id, email, github);
      this.employees.push(engineer)
      this.showMenu()
    })
}

Prompts.prototype.addIntern = function() {
  inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "Enter the intern's name."
    },
    {
      type: 'text',
      name: 'id',
      message: "Enter the intern's employee ID."
    },
    {
      type: 'text',
      name: 'email',
      message: "Enter the intern's email address."
    },
    {
      type: 'text',
      name: 'school',
      message: "Enter the intern's school."
    }])
    .then(({ name, id, email, school }) => {
      intern = new Intern(name, id, email, school);
      this.employees.push(intern)
      this.showMenu()
    })
}

Prompts.prototype.buildSite = buildSite;

module.exports = Prompts;