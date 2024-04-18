// app.js
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRouter.js');

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());

// Routes
app.use(userRouter);

module.exports = app;
