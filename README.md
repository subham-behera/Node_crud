# Node.js CRUD API

It is a simple Backend Project to understand functionality.

### Create a Node API

#### Perform CRUD Operation
1. **Create**: `POST /api/resource`
2. **Read**: `GET /api/resource` and `GET /api/resource/:id`
3. **Update**: `PUT /api/resource/:id`
4. **Delete**: `DELETE /api/resource/:id`

> [!NOTE]
> .env contains the mongodb_url & PORT

## Project Overview

This project is a simple backend API built with Node.js to perform CRUD operations. It is designed to help understand basic functionality and structure of a Node.js application. The API interacts with a MongoDB database and provides endpoints to create, read, update, and delete data.

## Files in the Repository

- **`controllers/`**: Contains the logic for handling requests and responses.
- **`db/`**: Database connection configuration.
- **`middleware/`**: Middleware functions for request processing.
- **`models/`**: Mongoose models for defining the database schema.
- **`routes/`**: Defines the routes/endpoints for the API.
- **`uploads/`**: Directory for storing uploaded files.
- **`README.md`**: Project documentation.
- **`app.js`**: Main application file.
- **`package.json`**: Lists the project dependencies and scripts.
- **`server.js`**: Entry point to start the server.

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/subham-behera/node_crud.git
    cd node_crud
    ```

2. **Install the required packages**:
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add your MongoDB URL and PORT**:
    ```env
    MONGODB_URL=your_mongodb_url
    PORT=your_port
    ```

## Running the App

To run the application, execute the following command in your terminal:
```bash
npm start
