require('dotenv').config();  // Load environment variables
const express = require('express');
const connectDB = require('./config/db');
const corsMiddleware = require('./middleware/corsMiddleware');
const formRoutes = require('./routes/formRoutes');

// Create an instance of the express app
const app = express();

connectDB();

// Middleware
app.use(express.json({ limit: '50mb' })); 
app.use(corsMiddleware);
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', formRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
