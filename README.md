Employee Management System
This project is a web-based Employee Management System developed using HTML, CSS, and JavaScript, with MySQL as the database to store employee data. The system is designed to facilitate the management of employee records, such as adding, updating, and deleting employees, as well as viewing a list of all employees. The project is hosted locally using XAMPP, providing an integrated development environment with Apache and MySQL for seamless execution and testing.

Features
Add Employees: Allows administrators to add new employee records, including details like name, designation, department, salary, and contact information.
Edit Employee Records: Enables users to update existing employee details.
Delete Employees: Provides the functionality to remove employee records from the database.
View Employee List: Displays a list of all employees in a tabular format with the ability to sort and search.
Search Functionality: Includes a search feature to quickly find employees by name, department, or employee ID.
MySQL Database: All employee data is stored in a MySQL database, offering persistent and secure storage.
Tech Stack
Frontend: HTML5, CSS3, JavaScript (for dynamic content and user interaction)
Backend/Server: XAMPP (Apache and PHP)
Database: MySQL (for storing employee records)
How to Run the Project
Prerequisites
Download and install XAMPP
Basic knowledge of HTML, CSS, JavaScript, MySQL, and PHP.
A MySQL database configured with employee-related tables.
Steps to Run
Clone this repository to your local machine.

bash
Copy code
git clone https://github.com/your-username/employee-management-system.git
Install XAMPP and start the Apache and MySQL servers.

Create a MySQL database:

Open phpMyAdmin in your browser.
Create a new database named employee_management.
Import the employee_management.sql file (provided in the project folder) to set up the database schema and tables.
Configure Database Connection:

Open the db_config.php file located in the project folder.
Edit the database credentials (username, password, and database name) to match your MySQL setup:
php
Copy code
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employee_management";
Place the project folder inside the htdocs directory of XAMPP:

bash
Copy code
C:/xampp/htdocs/employee-management-system
Run the project by navigating to the following URL in your browser:

bash
Copy code
http://localhost/employee-management-system
You can now start adding, editing, deleting, and managing employee records.

Database Structure
Table Name: employees
id (Primary Key, Auto Increment)
name (VARCHAR)
designation (VARCHAR)
department (VARCHAR)
email (VARCHAR)
salary (DECIMAL)
contact (VARCHAR)
date_of_joining (DATE)
Folder Structure
graphql
Copy code
├── htdocs/
│   └── employee-management-system/
│       ├── index.html            # Main HTML file for user interface
│       ├── styles.css            # CSS file for styling
│       ├── script.js             # JavaScript file for front-end functionality
│       ├── db_config.php         # PHP file for MySQL database connection
│       ├── employee_management.sql # SQL file to create and populate the database
│       ├── add_employee.php      # PHP file to handle employee insertion
│       ├── update_employee.php   # PHP file to handle employee updates
│       ├── delete_employee.php   # PHP file to handle employee deletion
│       └── fetch_employees.php   # PHP file to fetch and display employee data
Future Enhancements
User Authentication: Add login and authentication for admins to manage employees securely.
Role-Based Access: Implement access control to restrict functionalities based on user roles (admin, HR, etc.).
Enhanced Search: Introduce advanced filters for searching employees by salary range, date of joining, etc.
