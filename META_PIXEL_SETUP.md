# Meta Pixel Setup Guide

## Step 1: Get Your Meta Pixel ID

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Click on **"Connect Data Sources"** → **"Web"**
3. Click **"Meta Pixel"**
4. If you don't have a pixel yet, click **"Create Pixel"**
5. Copy your **Pixel ID** (it's a number like: `123456789012345`)

## Step 2: Add Pixel ID to Environment Variables

### In Vercel:

Go to: **Vercel → Your Project → Settings → Environment Variables**

Add this variable:
- **Key:** `NEXT_PUBLIC_META_PIXEL_ID`
- **Value:** Your Pixel ID (e.g., `123456789012345`)
- **Environments:** Select all (Production, Preview, Development)

### In Local .env File:

Add this line to your `.env` file:
```
NEXT_PUBLIC_META_PIXEL_ID="your-pixel-id-here"
```

## Step 3: Redeploy Vercel

After adding the environment variable:
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

## Step 4: Test Meta Pixel

1. Visit your live website
2. Open browser developer tools (F12)
3. Go to **Console** tab
4. Type: `fbq('track', 'PageView')` and press Enter
5. If it works, you'll see no errors

Or check in Meta Events Manager:
- Go to **Events Manager** → **Test Events**
- Visit your website
- You should see events appear in real-time

## What Events Are Being Tracked:

✅ **PageView** - Automatically tracked on every page load
✅ **Lead** - Tracked when someone submits the form
✅ **CompleteRegistration** - Tracked when form submission is successful

## Custom Events:

You can also track custom events by importing:
```typescript
import { trackEvent, trackCustomEvent } from '@/components/MetaPixel'

// Track standard event
trackEvent('Purchase', { value: 100, currency: 'USD' })

// Track custom event
trackCustomEvent('VideoWatched', { video_title: 'Introduction Video' })
```

## Verify It's Working:

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel
3. Go to **Test Events** tab
4. Visit your website and submit the form
5. Events should appear within seconds

## Troubleshooting:

- **Pixel not firing?** Check that `NEXT_PUBLIC_META_PIXEL_ID` is set correctly
- **Events not showing?** Make sure ad blockers are disabled
- **Need help?** Check Meta Pixel documentation: https://developers.facebook.com/docs/meta-pixel

