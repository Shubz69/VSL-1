# Deployment Guide

This guide will walk you through deploying your VSL Psychology page to Vercel (frontend) and Railway (database).

## Step 1: Set Up Railway Database

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up or log in

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo" or "Empty Project"

3. **Add MySQL Database**
   - Click "New" → "Database" → "MySQL"
   - Wait for the database to provision

4. **Get Connection String**
   - Click on your MySQL database service
   - Go to the "Connect" or "Variables" tab
   - Copy the `DATABASE_URL` value
   - Format: `mysql://root:password@host.railway.app:3306/railway`

## Step 2: Set Up Local Development

1. **Clone and Install**
   ```bash
   git clone https://github.com/Shubz69/VSL-1.git
   cd VSL-1
   npm install
   ```

2. **Create Environment File**
   - Create a `.env` file in the root directory
   - Add your Railway database URL:
     ```
     DATABASE_URL="mysql://root:password@host.railway.app:3306/railway"
     NODE_ENV="development"
     ```

3. **Set Up Database Schema**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Test Locally**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:3000
   - Test the form submission

## Step 3: Deploy to Vercel

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "Add New" → "Project"
   - Import your repository: `Shubz69/VSL-1`

2. **Configure Project**
   - Framework Preset: Next.js (should auto-detect)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Add Environment Variables**
   - Go to "Environment Variables" in project settings
   - Add:
     - `DATABASE_URL`: Your Railway MySQL connection string
     - `NODE_ENV`: `production`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

5. **Set Up Database Schema in Production**
   - After first deployment, you may need to run migrations
   - Use Railway's console or connect via MySQL client
   - Or add a deployment script to run `prisma db push`

## Step 4: Database Setup for Production

After deploying to Vercel, you need to run Prisma migrations on your Railway database:

**Option 1: Via Railway Console**
1. Go to your MySQL service in Railway
2. Click "Connect" → "MySQL Console"
3. Run the SQL from your Prisma schema manually

**Option 2: Via Local Connection**
```bash
# Make sure your .env has the Railway DATABASE_URL
npx prisma db push
```

**Option 3: Add to Vercel Build**
You can add a build script that runs migrations. Update `package.json`:
```json
"build": "prisma generate && prisma db push && next build"
```

## Step 5: Viewing Form Submissions

### Option 1: Export to CSV/Excel

Run the export script locally:
```bash
# Make sure your .env points to Railway database
npm run export-data
```

This creates a CSV file in the `exports/` folder that you can open in Excel.

### Option 2: Prisma Studio (Development)

```bash
npx prisma studio
```

Opens a web interface at http://localhost:5555 to view all submissions.

### Option 3: Direct Database Access

Use MySQL Workbench or any MySQL client:
- Connect using your Railway connection string
- Query: `SELECT * FROM applications ORDER BY createdAt DESC;`
- Export results to Excel

### Option 4: Create Admin Panel (Future Enhancement)

We can add a protected admin route to view submissions directly from the website.

## Troubleshooting

### Database Connection Errors

- Verify your `DATABASE_URL` is correct
- Check Railway database is running
- Ensure your Railway database allows connections from Vercel IPs
- Some Railway plans may have connection limits

### Build Errors

- Make sure all dependencies are in `package.json`
- Check that Prisma is generating the client
- Verify environment variables are set correctly in Vercel

### Form Not Submitting

- Check browser console for errors
- Verify API route is accessible: `/api/submit-form`
- Check Vercel function logs for errors
- Ensure database connection is working

## Adding Your Video

1. Upload video to YouTube, Vimeo, or your hosting service
2. Edit `components/VideoSection.tsx`
3. Replace the placeholder with an iframe or video element

Example for YouTube:
```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  className="w-full h-full"
  allowFullScreen
/>
```

## Maintenance

### Regular Backups

- Railway automatically backs up databases
- Export data regularly using the export script
- Consider setting up automated backups

### Monitoring

- Check Vercel dashboard for deployment status
- Monitor Railway dashboard for database usage
- Set up error tracking (e.g., Sentry) for production

## Need Help?

- Check Railway docs: https://docs.railway.app
- Check Vercel docs: https://vercel.com/docs
- Check Prisma docs: https://www.prisma.io/docs

