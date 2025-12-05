# COMPLETE SETUP GUIDE - ALL VARIABLES

## 🎯 REMEMBERED CREDENTIALS

**Gmail App Password:** `tpck hmoq cunk quyv` (remove spaces when using: `tpckhmoqcunkquyv`)

**Railway Database Connection:**
- Host: `yamanote.proxy.rlwy.net`
- Port: `18593`
- User: `root`
- Password: `PqrldZpsOMQoWLFErteQBxdtQpMNTiDg`
- Database: `railway`

## 📋 VARIABLES TO ADD IN VERCEL

Go to: **Vercel → Your Project → Settings → Environment Variables**

Add these 3 variables (select ALL environments - Production, Preview, Development):

### Variable 1: DATABASE_URL
```
mysql://root:PqrldZpsOMQoWLFErteQBxdtQpMNTiDg@yamanote.proxy.rlwy.net:18593/railway
```

### Variable 2: EMAIL_USER
```
shubzfx@gmail.com
```
(Or whatever Gmail address you're using to send emails)

### Variable 3: EMAIL_PASSWORD
```
tpckhmoqcunkquyv
```
(Remove spaces from the app password: `tpck hmoq cunk quyv` becomes `tpckhmoqcunkquyv`)

## 📋 VARIABLES FOR LOCAL .env FILE

Create a file named `.env` in your project root:

```env
DATABASE_URL="mysql://root:PqrldZpsOMQoWLFErteQBxdtQpMNTiDg@yamanote.proxy.rlwy.net:18593/railway"
EMAIL_USER="shubzfx@gmail.com"
EMAIL_PASSWORD="tpckhmoqcunkquyv"
```

## 🔧 MYSQL WORKBENCH SETTINGS

**Connection Details:**
- Hostname: `yamanote.proxy.rlwy.net`
- Port: `18593`
- Username: `root`
- Password: `PqrldZpsOMQoWLFErteQBxdtQpMNTiDg`
- Default Schema: `railway`

**The table is already created!** You should see `applications` table in the `railway` database.

## ✅ WHAT'S DONE

- ✅ Database table created in Railway
- ✅ Email notification code added
- ✅ Code fixes applied for Vercel build
- ✅ All dependencies installed

## 🚀 NEXT STEPS

1. **Add variables to Vercel** (see above)
2. **Create local .env file** (see above)
3. **Redeploy Vercel** - Go to Deployments → Click "Redeploy"
4. **Test the form** - Fill it out and check:
   - Email arrives at `Shubzfx@gmail.com`
   - Data appears in MySQL Workbench

## 📧 EMAIL RECIPIENT

All form submissions send emails to: **Shubzfx@gmail.com**

## 📊 EXPORT DATA TO EXCEL

Run this command:
```bash
npm run export-data
```

This creates a CSV file in the `exports/` folder that opens in Excel.

## 🧪 TEST LOCALLY

Run these commands:
```bash
npm install
npm run dev
```

Then visit: http://localhost:3000

