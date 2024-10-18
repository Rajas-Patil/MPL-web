const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Your MySQL username
  password: 'password',   // Your MySQL password
  database: 'MPL_WEB',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
