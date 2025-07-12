const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test database connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Database connected successfully');
    client.release();
  } catch (err) {
    console.error('❌ Database connection error:', err);
  }
};

// Get all education records
const getEducation = async () => {
  const result = await pool.query('SELECT * FROM education ORDER BY id');
  return result.rows;
};

// Get all skills records
const getSkills = async () => {
  const result = await pool.query('SELECT * FROM skills ORDER BY id');
  return result.rows;
};

// Get all projects records
const getProjects = async () => {
  const result = await pool.query('SELECT * FROM projects ORDER BY id');
  return result.rows;
};

module.exports = {
  pool,
  testConnection,
  getEducation,
  getSkills,
  getProjects
};
