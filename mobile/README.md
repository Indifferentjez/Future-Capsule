# Nostalgic Message to the Future – Mobile (Expo)

React Native (Expo) app for the Time Capsule: Google/Apple sign-in, full-screen audio/video recording with guided prompts, upload to Supabase Storage, and open-message ceremony.

## Tech stack

- **Expo** ~52 + TypeScript
- **React Navigation** (native stack)
- **Zustand** – draft/compose state
- **Supabase** – Auth (OAuth + SecureStore), Postgres, Storage
- **expo-camera** – video recording (max 1:30)
- **expo-av** – audio recording (max 2:00) + playback
- **expo-file-system** – file handling for upload
- **react-native-reanimated** – prompt overlay fade animations

## Env vars

Create `mobile/.env` (or use EAS/env in app config):

```bash
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
# For opening messages from app (signed URL + open token APIs)
EXPO_PUBLIC_APP_URL=https://your-next-app.vercel.app
```

## Supabase redirect URL (Auth)

1. **Dashboard** → Authentication → URL configuration.
2. Add **Redirect URL**: `nostalgiccapsule://auth-callback`
3. For dev with Expo Go, you can also add: `exp://192.168.x.x:8081/--/auth-callback` (replace with your machine IP) if you need to test on device with Expo Go.

## Google sign-in (Supabase + mobile)

1. **Supabase**: Authentication → Providers → Google → Enable, set Client ID and Client Secret from Google Cloud.
2. **Google Cloud Console**:
   - APIs & Services → Credentials → Create OAuth 2.0 Client ID.
   - Application type: **Web application** (Supabase uses this for the OAuth flow).
   - Authorized redirect URIs: use the Supabase callback URL shown in the Supabase Google provider (e.g. `https://your-project.supabase.co/auth/v1/callback`).
3. **Mobile**: The app uses `expo-web-browser` to open the Supabase OAuth URL and `nostalgiccapsule://auth-callback` to return; no extra Google client ID is required in the app.

## Apple sign-in (iOS)

1. **Supabase**: Authentication → Providers → Apple → Enable. You’ll need:
   - Apple Service ID
   - Key ID, Team ID, and private key (from Apple Developer).
2. **Apple Developer**: Create a Service ID, enable Sign in with Apple, set redirect URL to Supabase callback. Create a key for Sign in with Apple and download the `.p8`; use Key ID and Team ID in Supabase.
3. **Mobile**: Uses `expo-apple-authentication` on iOS; the app calls `signInWithIdToken` with the Apple identity token. No in-app browser for Apple.

## Session persistence

Supabase client uses **expo-secure-store** as the auth storage adapter so the session persists across app restarts. On launch, if a session exists the app shows the main stack (Inbox); otherwise the auth stack (Login/Signup).

## Deep link (cold start)

If the app is opened from a link like `nostalgiccapsule://auth-callback#access_token=...&refresh_token=...`, `RootNavigator` handles it via `Linking.getInitialURL()` and `Linking.addEventListener("url", ...)` and calls `supabase.auth.setSession()` so the user is logged in after OAuth redirect.

## Run

```bash
cd mobile
npm install
npx expo start
```

Then run on iOS simulator or Android emulator (or Expo Go).

## Mobile test checklist

### Auth (iOS)

- [ ] **Apple Sign-In**: On iOS (simulator with Apple ID or device), tap “Continue with Apple” → sign in → returns to app and shows Inbox.
- [ ] **Google Sign-In**: Tap “Continue with Google” → in-app browser opens → sign in → redirect to `nostalgiccapsule://auth-callback` → app shows Inbox.
- [ ] Session persists after killing and reopening the app (Inbox without re-login).
- [ ] Sign out returns to Login screen.

### Permissions

- [ ] Camera + microphone permission requested when entering Video Record screen.
- [ ] Microphone permission requested when entering Audio Record screen.

### Video recording

- [ ] Full-screen camera view; Record starts recording, Stop stops it.
- [ ] Countdown timer visible; recording auto-stops at 1:30.
- [ ] With “Guided” on, prompts fade in/out every ~12 s during recording; overlay does not block record/stop controls.
- [ ] After stop, navigates to Media Preview; preview plays video; “Re-record” goes back to Video Record; “Use this” goes to Review.
- [ ] On Review, “Send to future self” creates message and uploads file to Supabase Storage (`capsule-media`), then resets and shows Inbox.

### Audio recording

- [ ] Full-screen mic UI; Record starts, Stop stops; timer counts down; auto-stops at 2:00.
- [ ] Guided prompts fade in/out during recording.
- [ ] Preview: play/pause works; Re-record and Use this behave as for video.
- [ ] Upload and DB update as for video.

### Open message (playback)

- [ ] Inbox shows capsules; tap one → app fetches open token from backend, then navigates to Open Message.
- [ ] “Tap to open” ceremony; then content: text in parchment style, or audio/video with play controls.
- [ ] Video uses native controls and plays inline (iOS-friendly).
- [ ] Signed URL is loaded from `EXPO_PUBLIC_APP_URL` API; playback works for both audio and video.

### Composer flow

- [ ] Delivery: date vs birthday + timezone; Message type: Text / Audio / Video; Guided toggle; Prompts: select 3–6 when guided on.
- [ ] Text: type message → Review → Submit.
- [ ] Audio/Video: Record → Preview → Use this → Review → Submit (with upload).

## File structure (mobile)

```
mobile/
├── App.tsx
├── app.json
├── package.json
├── src/
│   ├── components/
│   │   └── PromptOverlay.tsx      # Flickering guided prompts overlay
│   ├── lib/
│   │   ├── api.ts                 # getOpenToken, getOpenMessage (backend)
│   │   ├── auth.ts                # Google/Apple sign-in, redirect URL
│   │   ├── supabase.ts            # Client + SecureStore
│   │   └── upload.ts              # Upload to capsule-media bucket
│   ├── navigation/
│   │   ├── types.ts
│   │   ├── RootNavigator.tsx      # Session + deep link handling
│   │   ├── AuthStack.tsx
│   │   └── MainStack.tsx
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── SignupScreen.tsx
│   │   ├── composer/
│   │   │   ├── DeliveryScreen.tsx
│   │   │   ├── MessageTypeScreen.tsx
│   │   │   ├── GuidedToggleScreen.tsx
│   │   │   ├── PromptSelectScreen.tsx
│   │   │   ├── TextComposeScreen.tsx
│   │   │   └── ReviewScreen.tsx
│   │   ├── record/
│   │   │   ├── VideoRecordScreen.tsx
│   │   │   ├── AudioRecordScreen.tsx
│   │   │   └── MediaPreviewScreen.tsx
│   │   ├── InboxScreen.tsx
│   │   └── OpenMessageScreen.tsx
│   └── store/
│       └── composeStore.ts
└── README.md
```

## Antique theme

The “antique desk” style is used **only** on the **Open Message** screen (ceremony + parchment/media). The rest of the app (Inbox, composer, record screens) uses a modern UI.
