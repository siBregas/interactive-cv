const { Pool } = require('pg');
const { educationHistory, skills, projects } = require('./data');

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
    
    // Check if tables exist
    const tableCheck = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('education', 'skills', 'projects')
    `);
    
    console.log('📊 Available tables:', tableCheck.rows.map(row => row.table_name));
    
    client.release();
  } catch (err) {
    console.error('❌ Database connection error:', err);
  }
};

// Get all education records
const getEducation = async () => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY id');
    return result.rows;
  } catch (error) {
    console.error('Error fetching education from DB, using fallback:', error.message);
    return educationHistory; // Fallback to static data
  }
};

// Get all skills records
const getSkills = async () => {
  try {
    const result = await pool.query('SELECT * FROM skills ORDER BY id');
    return result.rows;
  } catch (error) {
    console.error('Error fetching skills from DB, using fallback:', error.message);
    return skills; // Fallback to static data
  }
};

// Get all projects records
const getProjects = async () => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id');
    return result.rows;
  } catch (error) {
    console.error('Error fetching projects from DB, using fallback:', error.message);
    return projects; // Fallback to static data
  }
};

module.exports = {
  pool,
  testConnection,
  getEducation,
  getSkills,
  getProjects
};
