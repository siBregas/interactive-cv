require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { testConnection, getEducation, getSkills, getProjects } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Test database connection on startup
testConnection();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-vercel-app.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// API Routes
app.get('/api/education', async (req, res) => {
  try {
    const education = await getEducation();
    res.json(education);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const skills = await getSkills();
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await getProjects();
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
  res.json({ message: 'Interactive CV Backend API' });
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});