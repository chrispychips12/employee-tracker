require('dotenv').config(); 
// Load environment variables from .env file

const { Pool } = require('pg'); 
// Postgres database library

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
}); 
// Pull in environment variables

module.exports = pool; 
// export the pool object for use in other modules
