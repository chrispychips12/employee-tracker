const pool = require('./db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log('Connection successful, current time:', res.rows[0]);
  }
  pool.end(); // Closes the connection pool
});
