const writeSite = require('./writeSite')

const buildSite = employeeArr => {
  let fileContent = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/ef258a0d19.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href = "./style.css">
    </head>

    <body>
      <header>
        <h1>My Team</h1>
      </header>

      <main class = "container col-12">
      ${generateEmployees(employeeArr)}
      </main>
    </body>
  </html>
  `
  // Send the info to the function that actually writes the HTML file
  writeSite(fileContent)
}

// Create a function that checks the employee's role and returns text matching the info relevant to that class
const showInfo = employee => {
  switch (employee.getRole()) {
    case 'Manager':
      return `Office number: ${employee.officeNumber}`
    case 'Intern':
      return `School: ${employee.school}`
    case 'Engineer':
      return `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`
  }
}

// Create a function that displays an icon that matches the employee's role
const showIcon = employee => {
  switch (employee.getRole()) {
    case 'Manager':
      return `<i class="icon fas fa-coffee"></i>`
    case 'Intern':
      return `<i class="icon fas fa-graduation-cap"></i>`
    case 'Engineer':
      return `<i class="icon fas fa-glasses"></i>`
  }
}

const generateEmployees = employeeArr => {
  // Create an empty string to hold all the employee info
  let employeeInfo = '';
  // Create a for loop to generate a section for each employee in the array
  for (i = 0; i < employeeArr.length; i++) {
    employeeInfo += `
      <section class="card">
        <div class="title">
          <h4>${employeeArr[i].name}</h4>
          <h4>${showIcon(employeeArr[i])}${employeeArr[i].getRole()}</h4>
        </div>
        <div class="info">
          <p class = "id">ID: ${employeeArr[i].id}</p>
          <p class= "email">Email: <a href="mailto:${employeeArr[i].email}">${employeeArr[i].email}</a></p>
          <p class = "specialInfo">${showInfo(employeeArr[i])}</p>
        </div>
      </section>
    `
  }
  return employeeInfo
}

module.exports = buildSite;