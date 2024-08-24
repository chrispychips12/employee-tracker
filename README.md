# Employee Tracker Application

**Video Demonstration**: [Watch the video](https://drive.google.com/file/d/1eX5MnuHZ1nWFJmZgz5jC3cVcCZby6Env/view)

**GitHub Repository**: [View the repository](https://github.com/chrispychips12/employee-tracker)

## Description

The Employee Tracker is a command-line application designed to manage a company's employee database. Using Node.js, Inquirer, and PostgreSQL, this tool enables business owners and managers to efficiently view, add, and update departments, roles, and employees, ensuring that company data is organized and easily accessible.

## User Story

**AS A** business owner  
**I WANT** to be able to view and manage the departments, roles, and employees in my company  
**SO THAT** I can organize and plan my business effectively.

## Acceptance Criteria

**GIVEN** a command-line application that accepts user input  
**WHEN** I start the application  
**THEN** I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

**WHEN** I choose to view all departments  
**THEN** I am presented with a formatted table showing department names and department IDs.

**WHEN** I choose to view all roles  
**THEN** I am presented with the job title, role ID, the department that role belongs to, and the salary for that role.

**WHEN** I choose to view all employees  
**THEN** I am presented with a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers that the employees report to.

**WHEN** I choose to add a department  
**THEN** I am prompted to enter the name of the department, and that department is added to the database.

**WHEN** I choose to add a role  
**THEN** I am prompted to enter the name, salary, and department for the role, and that role is added to the database.

**WHEN** I choose to add an employee  
**THEN** I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.

**WHEN** I choose to update an employee role  
**THEN** I am prompted to select an employee to update and their new role, and this information is updated in the database.

## Features

- **Comprehensive Data Management**: Efficiently view, add, and update departments, roles, and employees.
- **Relational Database**: Utilizes PostgreSQL to maintain data integrity through foreign key constraints.
- **User-Friendly Interface**: Interactive command-line prompts using Inquirer for seamless user experience.
- **Error Handling**: Robust error handling to ensure smooth operations and informative feedback on any issues.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chrispychips12/employee-tracker.git

   
You can copy this markdown into your `README.md` file on GitHub. Let me know if you need any more help!

Screenshots: 


<img width="581" alt="Screenshot 2024-08-24 at 1 14 37 PM" src="https://github.com/user-attachments/assets/e6917559-d503-449d-b38f-0374463d0652">
<img width="740" alt="Screenshot 2024-08-24 at 1 14 55 PM" src="https://github.com/user-attachments/assets/dc80955b-472c-4be1-9b87-49e1822b422f">
