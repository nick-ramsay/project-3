# Crafter

Heroku Deployment: https://crafter-app.herokuapp.com

## Problem Summary 
As someone who runs a small personal business, I would like an application that could help me organize my inventory, customer details, projects, and billing in one easy to use tool.

## Overview
The Crafter application provides a simple, foundational tool for managing a small business. Users can enter inventory, track inveontory purchases and returns, and store customer information. They can use this information to create projects for customers using the inventory they've logged. In the projects, users can keep track of the project status, add and update inventory used for the project, and add comments regarding the projects progress. Once a project is marked as complete, it will automatically appear in the "Unbilled Project" queue on the "Billing" page where users can decide whether to generate a bill for the project. Once a bill is generated, users can track money received from the customer and money refunded to the customer. Users can also generate a PDF version of the bill to provide to the customers. 

As users follow this workflow, crafter tracks the credit and debit transactions that take place from buying inventory, returning inventory, receiving payments, and refunding customers. This enables the dashboard, seen on the homepage, to visualize the customers overall financial performance by giving them an outline of revenue, expenses, and profit margin in both numerical form and via bar chart.

## Installation & Prerequisites

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/crafter/dependent-react-packages.jpg?raw=true)

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/crafter/dependent-packages.jpg?raw=true)

The Crafter application is dependent upon ten packages...

 1. React
 2. Express
 3. Axios
 4. Mongoose
 5. React-PDF
 6. React-PDF-Table
 7. Chart.js
 8. JS-SHA256
 9. Moment.js
 10. if-env
 
- If you have cloned the repository with the package.json file, these packages can be installed using the ```npm-install``` command.

## Instructions

Crafter is deployed on Heroku for usage [here](https://crafter-app.herokuapp.com).

Create Account:

![Crafter Create Account](https://github.com/nick-ramsay/readme-images/blob/master/crafter/create-account.jpg?raw=true)

Login:

![Crafter Login](https://github.com/nick-ramsay/readme-images/blob/master/crafter/login.jpg?raw=true)

Dashboard:

Users will first land on a homepage showing them a dashboard with a chart and metrics evaluating their financial performance based upon transactions recorded throughout the workflows.

![Crafter Homepage](https://github.com/nick-ramsay/readme-images/blob/master/crafter/homepage-metrics.jpg?raw=true)

Customers:

![Crafter Customers](https://github.com/nick-ramsay/readme-images/blob/master/crafter/customers.jpg?raw=true)

Inventory:

![Crafter Inventory](https://github.com/nick-ramsay/readme-images/blob/master/crafter/inventory.jpg?raw=true)

Projects:

![Crafter Projects](https://github.com/nick-ramsay/readme-images/blob/master/crafter/projects.jpg?raw=true)

Billing:

![Crafter Billing](https://github.com/nick-ramsay/readme-images/blob/master/crafter/billing.jpg?raw=true)

PDF Bill:

![Crafter PDF Bill](https://github.com/nick-ramsay/readme-images/blob/master/crafter/pdf-bill.jpg?raw=true)

Account Settings:

![Crafter Account Settings](https://github.com/nick-ramsay/readme-images/blob/master/crafter/account-settings.jpg?raw=true)


## Built With
- Crafter application was built using React.js, MongoDB, Bootstrap, Node.js and the following Node Package Manage modules:

 1. Express
 2. Axios
 3. Mongoose
 4. React-PDF
 5. React-PDF-Table
 6. Chart.js
 7. JS-SHA256
 8. Moment.js
 9. if-env

## Authors 
- Developer: Nick Ramsay (@nick-ramsay)