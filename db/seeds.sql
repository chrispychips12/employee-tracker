-- Insert a department
INSERT INTO department (name) VALUES ('Sales');

-- Insert a role
INSERT INTO role (title, salary, department_id) VALUES ('Salesperson', 50000, 1);

-- Insert an employee
INSERT INTO employee (first_name, last_name, role_id) VALUES ('John', 'Doe', 1);
