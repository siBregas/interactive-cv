const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Debug logging
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Environment is production:', process.env.NODE_ENV === 'production');

// Static data as fallback
const educationHistory = [
  { id: 1, period: '2009 - 2015', institution: 'SDN 1 Jebugan', major: 'Sekolah Dasar'},
  { id: 2, period: '2016 - 2017', institution: 'PPMI Assalam', major: 'Mts'},
  { id: 3, period: '2018 - 2021', institution: 'SMK Negeri 2 Klaten', major: 'Elektronika' },
  { id: 4, period: '2023 - Sekarang', institution: 'Universitas AMIKOM', major: 'S1 - Teknik Informatika' }
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' }
];

const projects = [
  {
    id: 1,
    title: 'Website CRUD',
    images: ['/image/CRUD1.png', '/image/CRUD2.png', '/image/CRUD3.png'],
    image: '/image/CRUD1.png',
    description: 'Web iseng CRUD barang dengan admin panel untuk mengelola data barang. dan user dapat melihat data barang yang tersedia lalu melakukan proses transaksi yang akan mengurangi stock barang.',
    tech: ['Vue.js', 'Express.js', 'javascript', 'Prisma'],
    link: 'https://github.com/siBregas/TokoBarang_vue_express',
    has_slider: true
  },
  {
    id: 2,
    title: 'project kelas online',
    image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'web tembat belajar coding online',
    tech: ['Laravel', 'php'],
    link: 'https://github.com/KingEery/FP_PemrogWeb',
    has_slider: false
  }
];

// CORS configuration
app.use(cors({
  origin: isProduction 
    ? ['https://interactive-cv-bay.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// Serve static files from frontend build in production or Vercel
const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;
console.log('Will serve static files:', isProduction);

if (isProduction) {
  const frontendDistPath = path.join(__dirname, '../frontend/dist');
  console.log('Frontend dist path:', frontendDistPath);
  app.use(express.static(frontendDistPath));
}

// API Routes
app.get('/api/education', async (req, res) => {
  try {
    res.json(educationHistory);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
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
    database: 'Using static data (Vercel Serverless)'
  });
});

// Root endpoint - hanya untuk development
if (!isProduction) {
  app.get('/', (req, res) => {
    res.json({ 
      message: 'Interactive CV Backend API - Development Mode',
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
}

// Serve Vue.js app for all non-API routes in production or Vercel
if (isProduction) {
  app.get('*', (req, res) => {
    console.log('Serving for path:', req.path);
    // If it's an API route that doesn't exist, send JSON error
    if (req.path.startsWith('/api/')) {
      res.status(404).json({ 
        message: 'API endpoint not found',
        requested: req.path,
        available_endpoints: ['/api/health', '/api/education', '/api/skills', '/api/projects']
      });
    } else {
      // For all other routes, serve the Vue.js app
      const indexPath = path.join(__dirname, '../frontend/dist/index.html');
      console.log('Serving index.html from:', indexPath);
      res.sendFile(indexPath);
    }
  });
} else {
  // Development catch all
  app.get('*', (req, res) => {
    res.json({ 
      message: 'Interactive CV Backend API - Development Mode',
      requested: req.path,
      available_endpoints: ['/api/health', '/api/education', '/api/skills', '/api/projects']
    });
  });
}

// Only listen in development
if (!isProduction) {
  app.listen(PORT, () => {
    console.log(`Server backend berjalan di http://localhost:${PORT}`);
  });
}

// Export untuk Vercel
module.exports = app;