const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Routes
const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');

app.use('/api/projects', projectsRoute);
app.use('/api/contact', contactRoute);

// Basic health check endpoint
app.get('/', (req, res) => {
    res.send('Portfolio Backend API is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
