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
  
  mainMenu(); // Call the main menu function to start the application
  
  function viewAllDepartments() { // Function to view all departments, fetch department name
    pool.query('SELECT * FROM department', (err, res) => {
      if (err) throw err;
      console.table(res.rows);
      mainMenu(); // Return to main menu after displaying
    });
  }
  
  function viewAllRoles() { // Function to view all roles, fetch department and salary
    const query = `
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      LEFT JOIN department ON role.department_id = department.id
    `;
    pool.query(query, (err, res) => {
      if (err) throw err;
      console.table(res.rows);
      mainMenu();
    });
  }
  
  function viewAllEmployees() { // Function to view all employees, fetch role, department, salaraty, and manager
    const query = `
      SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
             CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employee
      LEFT JOIN role ON employee.role_id = role.id
      LEFT JOIN department ON role.department_id = department.id
      LEFT JOIN employee manager ON employee.manager_id = manager.id
    `;
    pool.query(query, (err, res) => {
      if (err) throw err;
      console.table(res.rows);
      mainMenu();
    });
  }
  

//   Add Department
//   Prompts the user for a department name and inserts it into the database.
  
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the new department?'
        }
    ]).then(answer => {
        const query = `INSERT INTO department (name) VALUES ($1)`;
        pool.query(query, [answer.departmentName], (err, res) => {
            if (err) throw err;
            console.log(`Added ${answer.departmentName} to the database`);
            mainMenu(); // Return to the main menu after inserting
        });
    });
}
 
//  Add Role
//  Prompts the user for role details and inserts it into the database.

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'What is the title of the new role?'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary for this role?'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'What is the department ID for this role?'
        }
    ]).then(answer => {
        const query = `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`;
        pool.query(query, [answer.roleTitle, answer.roleSalary, answer.departmentId], (err, res) => {
            if (err) throw err;
            console.log(`Added ${answer.roleTitle} to the database`);
            mainMenu(); // Return to the main menu after inserting
        });
    });
}

// Add an 'update employee role' function to update an employee's role in the database.
// Prompts the user for an employee ID and new role ID, then updates the employee's role in the database.

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'roleId',
            message: "What is the new role ID for this employee?"
        }
    ]).then(answer => {
        const query = `UPDATE employee SET role_id = $1 WHERE id = $2`;
        pool.query(query, [answer.roleId, answer.employeeId], (err, res) => {
            if (err) throw err;
            console.log(`Updated employee's role`);
            mainMenu(); // Return to the main menu after updating
        });
    });
}
