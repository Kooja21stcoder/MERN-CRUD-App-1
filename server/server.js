const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

// App
const app = express();

// DB
mongoose
.connect('mongodb://localhost:27017/', {})
.then(() => console.log('DB connected'))
.catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Route middleware
app.use('/api', postRoutes);
app.use('/api', authRoutes);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
