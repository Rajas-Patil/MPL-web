const express = require('express');
const app = express();  // Initialize 'app' here
const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json());

// Use the routes
app.use('/api', authRoutes);  // Correct usage of app

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
