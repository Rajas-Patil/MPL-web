const db = require('../config/db');

exports.addToCart = (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  db.query('INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)', 
    [user_id, product_id, quantity], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Item added to cart!');
    });
};

exports.getCart = (req, res) => {
  const { user_id } = req.params;

  db.query('SELECT * FROM cart WHERE user_id = ?', [user_id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};
