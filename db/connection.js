
const mysql = require('mysql2');


//MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'employee_db'
});

module.exports = connection

