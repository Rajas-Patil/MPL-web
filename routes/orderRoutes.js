const express = require('express');
const db = require('../db');
const router = express.Router();

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