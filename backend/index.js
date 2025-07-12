require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-vercel-app.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// API Routes
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is running!', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Interactive CV Backend API' });
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});