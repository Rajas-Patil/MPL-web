// const express = require('express');
// const router = express.Router();
// const connection = require('./db'); // MySQL connection

// // Login route
// router.post('/signIn', (req, res) => {
//     const { username, password } = req.body;

//     // Check if user exists in the database
//     const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
//     connection.query(query, [username, password], (err, results) => {
//         if (err) {
//             res.status(500).json({ error: 'Database error' });
//         } else if (results.length > 0) {
//             res.json({ message: 'Login successful', userId: results[0].id });
//         } else {
//             res.status(401).json({ error: 'Invalid credentials' });
//         }
//     });
// });

// module.exports = router;











// document.getElementById('signInForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting the traditional way

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Send the data to the backend (assuming the backend is running on localhost:3000)
//     fetch('http://localhost:3000/api/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.message === 'Login successful') {
//             alert('Successfully logged in!');
//             // Store the user ID in localStorage (for later use when buying products)
//             localStorage.setItem('userId', data.userId);
//             // Redirect to shop.html
//             window.location.href = 'shop.html';
//         } else {
//             alert('Login failed. Please check your username and password.');
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('An error occurred during login.');
//     });
// });





document.getElementById('signinForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    if (response.ok) {
      window.location.href = '/shop';  // Redirect to shop page after successful login
    } else {
      alert('Login failed. Please check your credentials.');
    }
  });
  