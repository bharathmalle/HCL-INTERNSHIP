Employee Management System
Overview

This is a web-based Employee Management System built using HTML, CSS, and JavaScript. It allows administrators to manage employee details, including adding, editing, deleting, and viewing employee information.


    Clicking on Create Employee Type button displays Create Employee Type form and allows the system to add new type of employee. Clicking on cancel button hides the respective form.

    Clicking on Delete Employee Type button displays Delete Employee Type form and allows the system to remove existing type of employee. Clicking on cancel button hides the respective form.

    Employee List should be represented with two tabs (types of employees) by default. One tab shows list of managers and other tab displays the developer list. One tab should be selected by default.

    User can select the type of employee (Manager/Developer) from dropdown menu before submitting.

    Name and Designations needs to be filled before adding an employee.

    Selecting an employee from the Employee List enables Edit and Remove button. Clicking on Edit button displays the information in Add Employee form and Add button label should be changed to Update. Clicking on Remove button removes the employee from the respective list.

    Clicking on Add button from the Add Employee list, add the employee in the respective tab.

    Clicking on Undo button removes the last added employee. Undo action can be perform for the last three added employees.

Features

    Add new employee details
    Edit existing employee information
    Delete employee records
    View all employee details in a table format
    Search for specific employees
    Responsive design for mobile and desktop

Technologies Used

    Frontend:
        HTML5
        CSS3
        JavaScript (Vanilla JS)

Getting Started

To run this project locally, follow these steps:
Prerequisites

    A modern web browser (e.g., Chrome, Firefox)
    Basic knowledge of HTML, CSS, and JavaScript

Installation

    Clone the repository:

    bash

git clone https://github.com/yourusername/employee-management-system.git

Navigate to the project folder:

bash

    cd employee-management-system

    Open the index.html file in a browser to launch the application.

File Structure

bash

├── index.html         # Main entry point of the application
├── css
│   └── styles.css     # CSS file for styling the application
├── js
│   └── main.js        # JavaScript file for handling application logic
└── README.md          # Project documentation

How to Use

    Add Employee: Fill out the employee form and click on the "Add Employee" button.
    Edit Employee: Click on the "Edit" button next to an employee's record, make changes, and click "Save".
    Delete Employee: Click the "Delete" button next to an employee's record to remove them from the list.
    Search Employee: Use the search bar to quickly find an employee by their name or ID.
