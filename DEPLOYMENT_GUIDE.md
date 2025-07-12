# 🚀 Panduan Deploy Interactive CV ke Vercel dengan Database Neon

## 📋 Checklist Persiapan

### ✅ 1. Setup Database Neon
1. **Buat akun di [neon.tech](https://neon.tech)**
2. **Buat database baru:**
   - Klik "Create Database"
   - Pilih region (Singapore/Asia)
   - Beri nama: `interactive-cv-db`
3. **Copy connection string:**
   - Format: `postgresql://username:password@host/database`
   - Simpan untuk nanti

### ✅ 2. Setup Schema Database
1. **Buka Neon SQL Editor**
2. **Copy & paste isi file `database/schema.sql`**
3. **Execute untuk create tables & insert data**

### ✅ 3. Install Dependencies
```bash
# Root project
npm install

# Backend dependencies
cd backend
npm install

# Frontend dependencies  
cd ../frontend
npm install
```

### ✅ 4. Test Local Development
```bash
# Di root project
npm run dev

# Atau manual:
# Terminal 1: cd backend && npm run dev
# Terminal 2: cd frontend && npm run dev
```

## 🌐 Deploy ke Vercel

### 🎯 Method 1: Monorepo (Recommended)
1. **Push ke GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Import di Vercel:**
   - Login ke [vercel.com](https://vercel.com)
   - Klik "New Project"
   - Import repository dari GitHub
   - Vercel akan detect `vercel.json` otomatis

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add: `DATABASE_URL` = `your_neon_connection_string`
   - Add: `NODE_ENV` = `production`

### 🎯 Method 2: Separate Deployments
1. **Deploy Backend:**
   ```bash
   cd backend
   vercel --prod
   ```

2. **Deploy Frontend:**
   ```bash
   cd frontend
   vercel --prod
   ```

## 🔧 Environment Variables Setup

### Backend (.env)
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@host/database
```

### Vercel Environment Variables
- `DATABASE_URL`: Connection string dari Neon
- `NODE_ENV`: production

## 📊 Test Production

### API Endpoints
- `GET /api/health` - Health check
- `GET /api/education` - Education data
- `GET /api/skills` - Skills data  
- `GET /api/projects` - Projects data

### Frontend
- Check image slider works
- Check API calls work
- Check responsive design

## 🛠️ Troubleshooting

### Common Issues:
1. **CORS Error**: Update backend CORS origin to production URL
2. **API Not Found**: Check vercel.json routes configuration
3. **Database Connection**: Verify DATABASE_URL format
4. **Build Error**: Check all dependencies installed

### Debug Commands:
```bash
# Check build locally
npm run build

# Check production build
npm run preview

# Check API health
curl https://your-api-url.vercel.app/api/health
```

## 🎉 Success Criteria

✅ Frontend loads without errors
✅ Image slider works (CRUD project)
✅ API calls return data
✅ All sections display correctly
✅ Mobile responsive works
✅ Database connection successful

## 📱 Next Steps

1. **Custom Domain** (optional)
2. **Analytics** (Vercel Analytics)
3. **Performance Optimization**
4. **SEO Optimization**
5. **Add more projects**

---

🎯 **Target URLs:**
- Frontend: `https://your-project.vercel.app`
- Backend: `https://your-project.vercel.app/api/health`
