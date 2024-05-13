# Avalon

A marketplace app where users can buy and sell a wide range of products. It provides a platform for individuals and businesses to showcase their products and connect with buyers.

## Project Description

Avalon is a full-stack web application built with React, Express, and MongoDB. It features a responsive and user-friendly interface similar in style to Amazon. Users can create accounts, list items for sale, browse products by category, and make purchases securely.

## Tech Stack

**Front-end:** React, Redux, TailwindCSS

**Backend:** Expressjs

**Database**: MongoDB

**Authentication**: OAuth

**Image Storage**: AWS S3

**Trello Board**: https://trello.com/b/kTEOKhMd/avalon

## Models

![Alt text](/public/images/ERD-1.png "Entity relationship Diagram")

## Component Hierarchy Diagram

![Alt text](/public/images/CHD.png "Component Hierarchy Diagram")

## API Endpoints

### Users

- **GET /api/users**: Get all users.
- **POST /api/users**: Create a new user.
- **GET /api/users/:id**: Get details of a specific user.
- **PUT /api/users/:id**: Update an existing user.
- **DELETE /api/users/:id**: Delete a user.

### Items

- **POST /api/items**: Create a new item listing.
- **GET /api/items**: Get all items listed for sale.
- **GET /api/items/:categoryId**: Get all items for a category.
- **GET /api/items/:id**: Get details of a specific item.
- **PUT /api/items/:id**: Update an existing item listing.
- **DELETE /api/items/:id**: Delete an item

### Transactions

- **POST /api/transactions**: Create a new transaction.
- **GET /api/transactions/:userId**: Get all transactions.
- **GET /api/transactions/:id**: Get details of a specific transaction.

## Getting Started

#### - Clone the Repository

```bash
git clone https://github.com/your-username/avalon.git

```

#### - Install Dependencies

```bash
cd avalon
npm install
```

#### - Set Up Environment Variables

Create a `.env` file in the root of the project with the following variables

```bash

```

#### - Start the backend(Express)

```bash
cd app
npm start
cd app
npm start
```

The backend will start on http://localhost:5173

#### - Start the frontend(React)

```bash
cd client
npm start
```

The frontend will start on http://localhost:3000
