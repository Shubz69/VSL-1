# Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database connection string for MySQL
# For Railway: You'll get this from your Railway project dashboard
# Format: mysql://user:password@host:port/database
DATABASE_URL="mysql://user:password@localhost:3306/vsl_psychology"

# Node environment
NODE_ENV="development"
```

## Railway Setup

1. Go to [Railway](https://railway.app) and create a new project
2. Click "New" → "Database" → "MySQL"
3. Once created, go to the database service
4. Copy the connection string from the "Connect" tab
5. The format will be something like: `mysql://root:password@host.railway.app:3306/railway`
6. Use this as your `DATABASE_URL`

## Vercel Setup

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add `DATABASE_URL` with your Railway connection string
4. Redeploy your application

