const db = require('../config/db');

exports.buyNow = (req, res) => {
  const { user_id, product_id } = req.body;

  db.query('INSERT INTO orders (user_id, product_id) VALUES (?, ?)', 
    [user_id, product_id], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Order placed successfully!');
    });
};
