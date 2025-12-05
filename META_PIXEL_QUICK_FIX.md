# Meta Pixel Setup - Quick Fix Guide

## Issue: Can't Click "Web" - Business Manager Required

If you see the popup "Business Manager account is required", here are your options:

### Option 1: Create Business Manager Account (Recommended)

1. **Go to:** https://business.facebook.com/
2. Click **"Create Account"** or **"Get Started"**
3. Enter your business details:
   - Business name (can be your name or business name)
   - Your name
   - Business email (can use your personal email)
4. Follow the setup steps
5. Once Business Manager is created, go back to Events Manager
6. Now you should be able to click "Web" and create a pixel

### Option 2: Use an Existing Pixel (If You Have One)

If you already have a Meta Pixel from a previous website or project:

1. Go to **Events Manager**
2. Click on **"Datasets"** (left sidebar)
3. Find your existing Pixel
4. Copy the **Pixel ID** (it's a number like `123456789012345`)

### Option 3: Skip Business Manager - Use Direct Pixel Setup

If you want to skip Business Manager for now, you can manually set up the pixel code, but you'll still need a Pixel ID eventually.

### Quick Alternative: Get Pixel ID from Ads Manager

1. Go to: https://business.facebook.com/adsmanager
2. If you have any ad account, the Pixel ID might already be there
3. Look for "Events" or "Pixel" section

## Once You Have Your Pixel ID:

### Add to Vercel:
1. Go to: **Vercel → Your Project → Settings → Environment Variables**
2. Add variable:
   - **Key:** `NEXT_PUBLIC_META_PIXEL_ID`
   - **Value:** Your Pixel ID number
   - **Environments:** All

### Add to Local .env:
```
NEXT_PUBLIC_META_PIXEL_ID="your-pixel-id-here"
```

### Redeploy Vercel:
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

## Need Help Creating Business Manager?

If you want step-by-step help creating Business Manager, I can guide you through it. Just let me know!

## Alternative: Test Without Pixel First

The website will work fine without the Pixel ID. The Pixel component will simply not load if the ID is missing. You can:
1. Deploy your site now
2. Set up Business Manager/Pixel later
3. Add the Pixel ID when ready

