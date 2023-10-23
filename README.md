# Personal Budget Tracker Backend

The backend for the Personal Budget Tracker project is responsible for handling transactions data and providing an API for the frontend to interact with the database. This README covers the key components and functionality of the backend.

## Table of Contents

- [Introduction](#introduction)
- [Routes](#routes)
- [Sample Data](#sample-data)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Front End](https://github.com/Joseph-Carter/Budget-App-Frontend)
- [Live Site](https://carters-capital.netlify.app/)

## Introduction

The backend of the Personal Budget Tracker is built using Express.js, a Node.js web application framework. It provides routes to perform CRUD (Create, Read, Update, Delete) operations on transaction data stored in the database. The backend serves as the API for the frontend to manage and retrieve transaction data.

## Routes

The backend defines several routes to interact with transaction data. These routes include:

- **GET /api/transactions**: Retrieve a list of all transactions.
- **GET /api/transactions/:index**: Retrieve a specific transaction by its index.
- **POST /api/transactions**: Add a new transaction to the database.
- **DELETE /api/transactions/:arrayIndex**: Delete a transaction by its array index.
- **PUT /api/transactions/:updateIndex**: Update a transaction by its array index.

These routes allow the frontend to manage transactions effectively.

## Sample Data

The backend includes sample transaction data for testing and development. This data is stored in a JavaScript array and simulates the transactions in the system. Here is an example of the sample data:

```javascript
module.exports = [
  {
    id: 1,
    itemName: 'Groceries',
    date: '2023/10/16',
    from: 'Grocery Store',
    amount: 150.00,
    spent: true,
    category: 'Food',
  },
  // Add more sample transactions here...
];
```
## Getting Started
To set up and run the backend of the Personal Budget Tracker locally, you can follow these steps:

Clone the repository:

Copy code
git clone https://github.com/your-username/personal-budget-tracker.git
cd personal-budget-tracker
Install dependencies:

Copy code
npm install
Set up the database configuration.

Start the backend server:

Copy code
npm start

## Usage
The backend provides an API for the frontend to manage and retrieve transaction data. The frontend communicates with the backend using these API routes.

## Contributing
If you'd like to contribute to the backend of the Personal Budget Tracker project, please follow the project's guidelines for contributions.
