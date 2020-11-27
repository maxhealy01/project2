const buildSite = employeeArr => {
  console.log( `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    </head>
  
    <body>
      <navbar>
        <h1>My Team</h1>
      </navbar>

      <main>
      ${generateEmployees(employeeArr)}
      </main>
    </body>
  </html>
  `)
}

// Create a function that checks the employee's role and returns text matching the info relevant to that class
const showInfo = employee => {
  switch (employee.getRole()) {
    case 'Manager':
      return `Office number: ${employee.officeNumber}`
    case 'Intern':
      return `School: ${employee.school}`
    case 'Engineer':
      return `Github: ${employee.github}`
  }
}

const generateEmployees = employeeArr => {
  // Create an empty string to hold all the employee info
  let employeeInfo = '';
  // Create a for loop to generate a section for each employee in the array
  for (i = 0; i < employeeArr.length; i++) {
    employeeInfo += `
      <section class="card">
        <h2>${employeeArr[i].name}</h2>
        <h2>${employeeArr[i].getRole()}</h2>
        <div class="info">
          <h3>ID: ${employeeArr[i].id}</h3>
          <h3>Email: ${employeeArr[i].email}</h3>
          <h3>${showInfo(employeeArr[i])}</h3>
        </div>
      </section>
    `
  }
  return employeeInfo
}

module.exports = buildSite;