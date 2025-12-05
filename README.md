# VSL Psychology Page

A beautiful Video Sales Letter (VSL) page for a psychology business offering courses and 1-to-1 sessions. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, modern design with purple and dark grey color scheme
- 🎥 Video placeholder section (ready for your video)
- 📝 Sign-up form with smooth scroll navigation
- 💾 Database integration for storing form submissions (MySQL)
- 📱 Fully responsive design
- ⚡ Optimized for Vercel and Railway deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MySQL (via Prisma ORM)
- **Deployment**: Vercel (Frontend) + Railway (Database)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MySQL database (local or Railway)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shubz69/VSL-1.git
   cd VSL-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your database connection string:
   ```
   DATABASE_URL="mysql://user:password@host:port/database"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Railway (Database)

1. Go to [Railway](https://railway.app) and create a new project
2. Add a MySQL database
3. Copy the connection string from Railway dashboard
4. Use this connection string in your environment variables

### Vercel (Frontend)

1. Go to [Vercel](https://vercel.com) and import your GitHub repository
2. Add environment variables:
   - `DATABASE_URL`: Your Railway MySQL connection string
3. Deploy!

### Environment Variables for Production

Make sure to set these in Vercel:
- `DATABASE_URL`: Your Railway MySQL connection string

## Database Schema

The application uses a single table to store form submissions:

- `id`: Auto-incrementing primary key
- `fullName`: Applicant's full name
- `email`: Email address (unique)
- `phoneNumber`: Phone number
- `reason`: Reason for applying (text)
- `createdAt`: Timestamp of submission
- `updatedAt`: Last update timestamp

## Viewing Form Submissions

You can view all form submissions by:

1. **Using Prisma Studio** (for development):
   ```bash
   npx prisma studio
   ```

2. **Exporting to Excel**:
   - Use a database tool like MySQL Workbench
   - Query: `SELECT * FROM applications ORDER BY createdAt DESC;`
   - Export results to CSV/Excel

3. **Creating an admin panel** (optional):
   - We can add a protected admin route to view submissions
   - Contact for more details

## Adding Your Video

1. Upload your video to a service like YouTube, Vimeo, or AWS S3
2. Update `components/VideoSection.tsx`:
   - Replace the placeholder div with your video embed code
   - Example for YouTube:
     ```tsx
     <iframe
       src="YOUR_VIDEO_URL"
       className="w-full h-full"
       allowFullScreen
     />
     ```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the purple and grey color scheme.

### Content

- Psychology information: `components/InfoSection.tsx`
- Hero section: `components/HeroSection.tsx`
- Form fields: `components/SignUpForm.tsx`

## Support

For issues or questions, please open an issue on GitHub.

## License

MIT


