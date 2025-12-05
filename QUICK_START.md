# Quick Start Guide

## ✅ What's Been Built

Your VSL Psychology page is now complete with:

- ✨ **Beautiful Design**: Purple and dark grey color scheme
- 🎥 **Video Placeholder**: Ready for your video
- 📝 **Sign-Up Form**: Full name, email, phone, and reason fields
- 💾 **Database Setup**: MySQL database schema ready for Railway
- 📊 **Data Export**: Script to export submissions to Excel/CSV
- 🚀 **Deployment Ready**: Configured for Vercel + Railway

## 🚀 Next Steps (In Order)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Railway Database
1. Go to [railway.app](https://railway.app) and create a new project
2. Add a MySQL database
3. Copy the connection string from Railway dashboard

### 3. Create `.env` File
Create a `.env` file in the root directory:
```env
DATABASE_URL="mysql://root:password@host.railway.app:3306/railway"
NODE_ENV="development"
```

### 4. Set Up Database Schema
```bash
npx prisma generate
npx prisma db push
```

### 5. Test Locally
```bash
npm run dev
```
Visit http://localhost:3000

### 6. Add Your Video
Edit `components/VideoSection.tsx` and replace the placeholder with your video embed code.

### 7. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add `DATABASE_URL` environment variable
4. Deploy!

### 8. View Form Submissions
```bash
npm run export-data
```
This creates a CSV file in the `exports/` folder.

## 📁 Project Structure

```
├── app/
│   ├── api/submit-form/     # API route for form submissions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main VSL page
├── components/
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── VideoSection.tsx     # Video placeholder section
│   ├── InfoSection.tsx      # Psychology information
│   └── SignUpForm.tsx       # Application form
├── lib/
│   └── prisma.ts            # Database client
├── prisma/
│   └── schema.prisma        # Database schema
└── scripts/
    └── export-to-excel.js   # Export script
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts`
- **Content**: Edit files in `components/`
- **Form Fields**: Edit `components/SignUpForm.tsx`

## 📚 More Information

- See `DEPLOYMENT.md` for detailed deployment instructions
- See `README.md` for full documentation
- See `ENV_SETUP.md` for environment variable setup

## 🆘 Need Help?

Everything is documented in:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guide
- `ENV_SETUP.md` - Environment setup

Your code is live at: https://github.com/Shubz69/VSL-1


