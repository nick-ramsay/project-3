# Crafter

Heroku Deployment: https://crafter-app.herokuapp.com

**Guest Login Credentials**

**Username:** ```demo@crafter.com```

**Password:** ```asdf1234```

## Problem Summary 
As someone who runs a small personal business, I would like an application that could help me organize my inventory, customer details, projects, and billing in one easy-to-use tool.

## Overview
The Crafter application provides a simple, foundational tool for managing a small business. Users can enter inventory, track inventory purchases and returns, and store customer information. They can use this information to create projects for customers using the inventory they've logged. In the projects, users can keep track of the project status, add and update inventory used for the project, and add comments regarding the projects progress. Once a project is marked as complete, it will automatically appear in the "Unbilled Project" queue on the "Billing" page where users can decide whether to generate a bill for the project. Once a bill is generated, users can track money received from the customer and money refunded to the customer. Users can also generate a PDF version of the bill to provide to the customers. 

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
 
If you have cloned the repository with the package.json file, these packages can be installed using the ```npm-install``` command.

## Instructions

Crafter is deployed on Heroku for usage [here](https://crafter-app.herokuapp.com).

**Create Account:**

Users can start using the application by completing the form on the Create Account page.

![Crafter Create Account](https://github.com/nick-ramsay/readme-images/blob/master/crafter/create-account.jpg?raw=true)

**Login:**

Once an account is created, users can sign in to the application using their e-mail and password.

![Crafter Login](https://github.com/nick-ramsay/readme-images/blob/master/crafter/login.jpg?raw=true)

**Dashboard:**

Users will first land on a homepage showing them a dashboard with a chart and metrics evaluating their financial performance based upon transactions recorded throughout the workflows. The page will summarize total revenue, expenses, and profits/losses.

![Crafter Homepage](https://github.com/nick-ramsay/readme-images/blob/master/crafter/homepage-metrics.jpg?raw=true)

**Customers:**

Customer information can be recorded on the Customer page. Once the information is recorded, a user can click on the red icon to cancel the customer making them inactive. The customer can be reactivated by clicking on the blue edit button and then selecting the "Reactivate Customer" button. Customer information can also be edited and saved on the Edit Customer component.

![Crafter Customers](https://github.com/nick-ramsay/readme-images/blob/master/crafter/customers.jpg?raw=true)

**Inventory:**

Inventory can be added on the Inventory page. Here, users can save the item name, the manufacturer, and also the price that they'd like to charge customers per unit for the inventory. The inventory item can also be rendered inactive by selecting the red button and can be reactivated by selecting the blue edit inventory button and then selecting "Reactivate Inventory".

Most importantly though, you will notice the green "+" and black "-" buttons. These allow users to record when they have purchased or returned inventory items. Users must enter the amount per unit and then how many units were purchased or returned. When saved, transactions will be recorded to keep track of how much money has been spent on inventory.

![Crafter Inventory](https://github.com/nick-ramsay/readme-images/blob/master/crafter/inventory.jpg?raw=true)

**Projects:**

On the projects page, users can record information about the projects on which they've worked. The name of the project, the customer, the status, hours logged, items used, and comments can be recorded against the project. These can all be edited by clicking the blue edit button, making updates, and saving. 

Once a project reaches complete status, it will be added to the "Unbilled Projects" queue on the Billing menu.

![Crafter Projects](https://github.com/nick-ramsay/readme-images/blob/master/crafter/projects.jpg?raw=true)

**Billing:**

The Billing menu allows users to manage bills and revenue collection from clients. Completed but unbilled projects will be added to the "Unbilled Queue" at the top of the screen where a user can select the "Generate Bill" button to create a bill for the project.

Once the bill is created, it will be added to the "Existing Bill" list. Users can select the green "+" button or the black "-" button to record payments received and record refunds issued to customers. These will also be recorded as transactions to count toward the user's total revenue. Finally, users can also generate a PDF version of their bill to be sent to customers by selecting the "PDF" link.

![Crafter Billing](https://github.com/nick-ramsay/readme-images/blob/master/crafter/billing.jpg?raw=true)

![Crafter PDF Bill](https://github.com/nick-ramsay/readme-images/blob/master/crafter/pdf-bill.jpg?raw=true)

**Account Settings:**

On the "Account" menu, users can update their account info.

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
