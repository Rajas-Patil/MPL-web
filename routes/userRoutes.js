const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

// SignIn route
router.post('/SignIn', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        res.json({ message: 'Login successful', redirectUrl: '/shop' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

// Other user-related routes (e.g., SignUp)

module.exports = router;



// Place an order
router.post('/buy', (req, res) => {
  const { user_id, product_name, price, quantity } = req.body;
  const total_price = price * quantity;

  const query = 'INSERT INTO orders (user_id, product_name, price, quantity, total_price) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [user_id, product_name, price, quantity, total_price], (err, result) => {
    if (err) throw err;

    res.json({ message: 'Order placed successfully!' });
  });
});

module.exports = router;
