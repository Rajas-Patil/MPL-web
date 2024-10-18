// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const db = require('../config/db');

// exports.register = (req, res) => {
//   const { username, email, password } = req.body;

//   // Hash the password
//   const hashedPassword = bcrypt.hashSync(password, 10);

//   db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
//     [username, email, hashedPassword], 
//     (err, result) => {
//       if (err) return res.status(500).send(err);
//       res.status(201).send('User registered successfully!');
//     });
// };

// exports.login = (req, res) => {
//   const { email, password } = req.body;

//   db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
//     if (err) return res.status(500).send(err);
//     if (results.length === 0) return res.status(404).send('User not found!');

//     const user = results[0];

//     // Compare the password
//     if (!bcrypt.compareSync(password, user.password)) {
//       return res.status(401).send('Incorrect password!');
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
//       expiresIn: '1h',
//     });

//     res.status(200).json({ token, username: user.username });
//   });
// };





exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Replace this with your actual database query and validation logic
    const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }

    // If login is successful, respond with 200 OK
    res.status(200).send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
