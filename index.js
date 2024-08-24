const inquirer = require('inquirer'); // Load the inquirer library
const pool = require('./db'); // Load the pool library

// test block for connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error executing query', err.stack);
//   } else {
//     console.log('Connection successful, current time:', res.rows[0]);
//   }
//   pool.end(); // Closes the connection pool
// });

// Created a function for the main menu and options for the user to select
function mainMenu() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add Department',
          'Add Role',
          'Add Employee',
          'Update Employee Role',
          'Exit'
        ]
      }
    ]).then(answer => { // Use the answer to determine which function to call
      switch (answer.action) {
        case 'View All Departments':
          viewAllDepartments();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Employees':
          viewAllEmployees();
          break;
        case 'Add Department':
          addDepartment();
          break;
        case 'Add Role':
          addRole();
          break;
        case 'Add Employee':
          addEmployee();
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'Exit': // Close the connection pool and exit the application
          pool.end();
          console.log("Goodbye!");
          break;
      }
    });
  }
  

  