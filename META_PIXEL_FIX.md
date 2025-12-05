# 🔧 Fix: Can't Click "Web" - Business Manager Required

## The Problem:
You're seeing a popup: **"Business Manager account is required"** which prevents you from clicking "Web" to create a Pixel.

## ✅ Solution: Create Business Manager Account

### Step-by-Step:

1. **Close the popup** (click X or Cancel)

2. **Go to Business Manager:**
   - Visit: https://business.facebook.com/
   - Or click the menu in Events Manager and look for "Business Manager"

3. **Create Account:**
   - Click **"Create Account"** or **"Get Started"**
   - Enter:
     - **Business Name:** Your name or business name (e.g., "VSL Psychology")
     - **Your Name:** Your full name
     - **Business Email:** Your email (can use personal email)
   - Click **"Continue"**

4. **Complete Setup:**
   - Add your business details
   - Verify your email if asked
   - Follow the prompts to finish setup

5. **Go Back to Events Manager:**
   - Once Business Manager is created, go back to: https://business.facebook.com/events_manager2
   - Click **"Connect Data Sources"** → **"Web"**
   - Now you should be able to click it!

6. **Create Pixel:**
   - Click **"Meta Pixel"**
   - Click **"Create Pixel"**
   - Name it (e.g., "VSL Psychology Pixel")
   - Copy your **Pixel ID** (a number like `123456789012345`)

## 🎯 Alternative: If You Already Have a Pixel

1. In Events Manager, click **"Datasets"** (left sidebar)
2. Look for any existing Pixels
3. Click on it to see the Pixel ID
4. Copy that ID

## 📝 Once You Have Pixel ID:

### Add to Vercel:
1. Go to: **Vercel → Your Project → Settings → Environment Variables**
2. Click **"Add New"**
3. Add:
   - **Key:** `NEXT_PUBLIC_META_PIXEL_ID`
   - **Value:** Your Pixel ID number (e.g., `123456789012345`)
   - **Environments:** Select all (Production, Preview, Development)
4. Click **"Save"**

### Add to Local .env:
Add this line to your `.env` file:
```
NEXT_PUBLIC_META_PIXEL_ID="your-pixel-id-here"
```

### Redeploy Vercel:
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

## ⏰ You Can Do This Later

The website will work perfectly fine without the Pixel ID. You can:
- ✅ Deploy your site now
- ✅ Get it working
- ✅ Add Meta Pixel later when you have Business Manager set up

The code is already in place - it just won't track until you add the Pixel ID.

## 💡 Quick Tip

Creating Business Manager takes about 5 minutes and is free. It's worth doing for proper tracking and analytics.

