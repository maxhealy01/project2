const inquirer = require('inquirer');
const { number } = require('yargs');
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
      message: "Enter the team manager's name.",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log(" Please enter your team manager's name.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'id',
      message: "Enter the team manager's employee ID.",
      validate: nameInput => {
        if (!isNaN(nameInput) && nameInput){
          return true;
        } else {
          console.log(" Please enter your team manager's employee ID number.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'email',
      message: "Enter the team manager's email address.",
      validate: nameInput => {
        if (nameInput.includes("@")){
          return true;
        } else {
          console.log(" Please enter your team manager's email address.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'officeNumber',
      message: "Enter the team manager's office number.",
      validate: nameInput => {
        if (!isNaN(nameInput) && nameInput){
          return true;
        } else {
          console.log(" Please enter your team manager's office number.");
          return false;
        }
      }
    }])
    // Add the manager to the employees array and show the menu
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
      message: "Enter the engineer's name.",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log(" Please enter the engineer's name.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'id',
      message: "Enter the engineer's employee ID.",
      validate: nameInput => {
        if (!isNaN(nameInput) && nameInput){
          return true;
        } else {
          console.log(" Please enter the engineer's employee ID number.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'email',
      message: "Enter the engineer's email address.",
      validate: nameInput => {
        if (nameInput.includes("@")){
          return true;
        } else {
          console.log(" Please enter the engineer's email address.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'github',
      message: "Enter the engineer's github profile.",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log(" Please enter the engineer's github profile.");
          return false;
        }
      }
    }])
    // Add an engineer to the employees array and return to the menu
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
      message: "Enter the intern's name.",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log(" Please enter the intern's name.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'id',
      message: "Enter the intern's employee ID.",
      validate: nameInput => {
        if (!isNaN(nameInput) && nameInput){
          return true;
        } else {
          console.log(" Please enter the intern's employee ID number.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'email',
      message: "Enter the intern's email address.",
      validate: nameInput => {
        if (nameInput.includes("@")){
          return true;
        } else {
          console.log(" Please enter the intern's email address.");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'school',
      message: "Enter the intern's school.",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log(" Please enter the intern's school.");
          return false;
        }
      }
    }])
    // Add an intern to the employees array and return to the menu
    .then(({ name, id, email, school }) => {
      intern = new Intern(name, id, email, school);
      this.employees.push(intern)
      this.showMenu()
    })
}

// Copy the large function in buildSite.js to transfer the employee array
Prompts.prototype.buildSite = buildSite;

module.exports = Prompts;