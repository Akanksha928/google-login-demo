# Vaulr — Google Login Demo

A cross-platform Google OAuth 2.0 login demo built with React + Vite + Capacitor.

## Tech Stack

| Layer | Tech | Why |
|---|---|---|
| UI | React + Vite | Industry standard, fast HMR |
| Auth (web) | `@react-oauth/google` | Official Google OAuth wrapper |
| Auth (mobile) | `@codetrix-studio/capacitor-google-auth` | Native Google SDK via Capacitor |
| Cross-platform | Capacitor | Wraps React build as iOS/Android app |
| Styling | Inline styles + CSS variables | Zero dependencies, full control |

## OAuth Flow

```
User clicks "Continue with Google"
        ↓
useGoogleLogin() triggers Google's OAuth popup
        ↓
User authenticates on Google's page
        ↓
Google returns an access_token
        ↓
We fetch /oauth2/v3/userinfo with that token
        ↓
Display profile on Dashboard
```

## Run Locally (Web)

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Deploy to Android

```bash
npm run build
npx cap add android
npx cap sync
npx cap open android   # Opens Android Studio
```

## Deploy to iOS

```bash
npm run build
npx cap add ios
npx cap sync
npx cap open ios       # Opens Xcode
```

> **Note:** For iOS/Android, switch from `useGoogleLogin` to `@codetrix-studio/capacitor-google-auth`
> which uses the native Google Sign-In SDK instead of the browser popup.

## Production Checklist

- [ ] Validate ID token server-side (never trust client alone)
- [ ] Add your production domain to Google Cloud Console authorized origins
- [ ] Store tokens securely (httpOnly cookies, not localStorage)
- [ ] Add iOS bundle ID and Android package name to Google Cloud Console
- [ ] Enable HTTPS before deploying

## Google Cloud Console Setup

1. Go to console.cloud.google.com
2. APIs & Services → Credentials → OAuth 2.0 Client ID
3. Add authorized origins: `http://localhost:5173` (dev), your prod domain
4. For mobile: create separate OAuth clients for iOS and Android
