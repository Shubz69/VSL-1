# COMPLETE SETUP GUIDE - ALL VARIABLES

## 🎯 REMEMBERED CREDENTIALS

**Gmail App Password:** `ahqe oipo iqgz vbjg` (remove spaces when using: `ahqeoi poi qgzvbjg`)

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
Shabzfazl@gmail.com
```
(This is the Gmail address that will send emails - make sure it's the same account the app password belongs to)

### Variable 3: EMAIL_PASSWORD
```
ahqeoi poi qgzvbjg
```
(Remove spaces from the app password: `ahqe oipo iqgz vbjg` becomes `ahqeoi poi qgzvbjg`)

## 📋 VARIABLES FOR LOCAL .env FILE

Create a file named `.env` in your project root:

```env
DATABASE_URL="mysql://root:PqrldZpsOMQoWLFErteQBxdtQpMNTiDg@yamanote.proxy.rlwy.net:18593/railway"
EMAIL_USER="Shabzfazl@gmail.com"
EMAIL_PASSWORD="ahqeoi poi qgzvbjg"
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
   - Email arrives at `Shabzfazl@gmail.com`
   - Data appears in MySQL Workbench

## 📧 EMAIL RECIPIENT

All form submissions send emails to: **Shabzfazl@gmail.com**

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

