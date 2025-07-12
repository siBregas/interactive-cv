require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Import database functions with error handling
let dbFunctions = {};
try {
  dbFunctions = require('./database');
  // Test database connection on startup
  if (dbFunctions.testConnection) {
    dbFunctions.testConnection();
  }
} catch (error) {
  console.error('Database module not found, using fallback data:', error.message);
  // Fallback to static data
  const { educationHistory, skills, projects } = require('./data');
  dbFunctions = {
    getEducation: async () => educationHistory,
    getSkills: async () => skills,
    getProjects: async () => projects
  };
}

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://interactive-cv-bay.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// API Routes
app.get('/api/education', async (req, res) => {
  try {
    const education = await dbFunctions.getEducation();
    res.json(education);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const skills = await dbFunctions.getSkills();
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await dbFunctions.getProjects();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Backend is running!', 
    timestamp: new Date().toISOString(),
    database: 'Connected to Neon PostgreSQL'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Interactive CV Backend API',
    status: 'running',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      education: '/api/education',
      skills: '/api/skills',
      projects: '/api/projects'
    }
  });
});

// Catch all handler  
app.get('*', (req, res) => {
  res.json({ 
    message: 'Interactive CV Backend API',
    requested: req.path,
    available_endpoints: ['/api/health', '/api/education', '/api/skills', '/api/projects']
  });
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});

// Export untuk Vercel
module.exports = app;