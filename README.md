# Interactive CV

Website portofolio pribadi dibangun dengan Vue.js, Express, dan Vercel.

## Link Live Demo
🌐 **Frontend**: https://interactive-cv-dusky.vercel.app/
🔗 **Backend API**: https://interactive-cv-backend.vercel.app/api/health

## Setup

### Backend
```bash
cd backend
npm install express cors dotenv
npm install nodemon --save-dev
npm install axios
```

### Frontend
```bash
cd frontend
npm install
npm install vue-router@4
npm install -D tailwindcss@^3.0 postcss autoprefixer
```

### Development
```bash
# Install all dependencies
npm run install-deps

# Run both frontend and backend
npm run dev

# Or run separately:
# Backend: cd backend && npm run dev
# Frontend: cd frontend && npm run dev
```

## Deployment ke Vercel

### 1. Persiapan Repository
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy ke Vercel
1. Login ke [vercel.com](https://vercel.com)
2. Import repository dari GitHub
3. Project akan otomatis terdeteksi sebagai monorepo
4. Deploy akan menggunakan konfigurasi dari `vercel.json`

### 3. Setup Database Neon
1. Buat akun di [neon.tech](https://neon.tech)
2. Buat database baru
3. Copy connection string
4. Add environment variable di Vercel: `DATABASE_URL`

## Environment Variables

### Backend (.env)
```
PORT=3000
NODE_ENV=development
DATABASE_URL=your_neon_database_url
```

### Vercel Environment Variables
- `DATABASE_URL`: Connection string dari Neon
- `NODE_ENV`: production

## API Endpoints

- `GET /api/education` - Riwayat pendidikan
- `GET /api/skills` - Keahlian & teknologi
- `GET /api/projects` - Project portfolio
- `GET /api/health` - Health check

## Tech Stack

- **Frontend**: Vue.js 3, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: Neon (PostgreSQL)
- **Deployment**: Vercel
npm install vue-router@4
npm install -D tailwindcss@^3.0 postcss autoprefixer
```