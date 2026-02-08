# Future Self Time Capsule

Send a message to your future self. Choose when to deliver it (specific date or birthday), write text or record audio/video with optional guided prompts, and open it in an antique-style “opening ceremony” when it arrives.

## Stack

- **Next.js 14** (App Router), TypeScript, Tailwind CSS, shadcn-style UI, Framer Motion, Zustand
- **Supabase**: Auth, Postgres, Storage
- **Resend**: Email delivery (abstraction so you can swap providers)
- **Vercel Cron**: Daily delivery job (or use Supabase Edge Functions)

## Setup

1. **Clone and install**

   ```bash
   npm install
   ```

2. **Supabase**

   - Create a project at [supabase.com](https://supabase.com).
   - Run migrations in order: `001_initial.sql`, `002_rls.sql`, `003_seed_prompts.sql`, `004_storage.sql`.
   - Create the `capsule-media` storage bucket in the dashboard if the migration doesn’t (Storage → New bucket → `capsule-media`, private).
   - Copy the project URL and anon key (and service role key for server/cron).

3. **Environment**

   Copy `.env.example` to `.env.local` and set:

   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
   - Optional: `CAPSULE_OPEN_SECRET` (for signing open links; defaults to service role key)
   - Optional: `RESEND_API_KEY`, `RESEND_FROM` for email (otherwise delivery logs to console)
   - Optional: `CRON_SECRET` for protecting `/api/cron/deliver`
   - Optional: `NEXT_PUBLIC_APP_URL` (Vercel sets this via `VERCEL_URL`)

4. **Auth (Supabase Dashboard)**

   In your Supabase project: **Authentication → URL Configuration** set:
   - **Site URL:** `http://localhost:3000` (dev) or your production URL.
   - **Redirect URLs:** add `http://localhost:3000/auth/callback`, `http://localhost:3000/**`, and your production callback URL.

   For **dev-only**: you can disable email confirmation in Authentication → Providers → Email → “Confirm email” off, so sign-up logs in immediately without checking email.

5. **Google OAuth (optional)**

   - **Supabase:** Authentication → Providers → Google → **Enabled**. Copy Client ID and Client Secret from Google Cloud.
   - **Supabase → Auth → URL Configuration:** ensure **Site URL** and **Redirect URLs** include:
     - `http://localhost:3000` (dev)
     - `http://localhost:3000/auth/callback`
     - Production: `https://your-domain.com`, `https://your-domain.com/auth/callback`
   - **Google Cloud Console:** APIs & Services → Credentials → OAuth 2.0 Client (Web application).
     - **Authorized redirect URIs:** add Supabase callback: `https://<PROJECT_REF>.supabase.co/auth/v1/callback` (replace `<PROJECT_REF>` with your Supabase project ref from the dashboard).
     - If the OAuth consent screen is in “Testing”, add test users under OAuth consent screen.
   - After consent, the app redirects to `/auth/callback`, exchanges the code for a session, then redirects to `/inbox`.

6. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). Sign up, create a capsule, and check the inbox.

### Windows + OneDrive

If the dev server is slow or you see file-watcher issues, **move the repo out of OneDrive** (e.g. to `C:\dev\time-capsule`). OneDrive sync and path length can cause high I/O and slow Next.js. If Turbopack is unstable, you can try:

```bash
npm run dev -- --no-turbopack
```

(or the Next.js 16 equivalent if documented).

## Routes

- **/** – Landing + quick picks (1y, 5y, 10y, custom, birthday); selection is stored in Zustand and used in composer.
- **/compose** – Stepper: delivery mode → type (text/audio/video) → guided mode → prompts (3–6) → record/write → optional song link → review & save. Prompts are loaded once when entering the prompts step; consider caching if you add more steps that reuse them.
- **/inbox** – List of capsules (scheduled/delivered/opened); edit (if scheduled) and delete.
- **/open/[id]?token=...** – **Antique-only** opening: overlay → parchment-style reveal → text/audio/video + optional “Play on Spotify/Apple Music”.

## Delivery (“Time Machine”)

- **No long-lived timers.** A cron job runs (e.g. hourly on Vercel) and queries messages where `status = 'scheduled'` and `deliver_at <= now()`.
- For each due message it sets `status = 'delivered'`, generates a signed token, and sends an email with `https://yourapp.com/open/[id]?token=...`.
- **Token:** JWT with `messageId`, `userId`, 7-day expiry. Validated server-side on `/open/[id]`.
- **Media:** Signed URLs are created server-side for playback on the open page; raw storage paths are never exposed.

## Security

- RLS on `messages` and storage so users only see their own data.
- Open link access is token-based; no auth required to open (link is the secret).
- Input validation (text length, song URL allowlist) and media duration enforced in UI; you can add server-side checks in API/actions.

## Debug and proxy stability

- **“Failed to fetch” / navigation errors:** The proxy and server actions are written to avoid throwing. If you still see failures, check the browser Network tab and server logs. Use **Copy debug info** on the error screen (path + digest) to correlate.
- **Proxy ECONNRESET:** The proxy (`proxy.ts`) wraps Supabase `getClaims()` in a short timeout and one retry. If Supabase is unreachable, the proxy logs a warning and still returns a response so the page loads. Ensure `NEXT_PUBLIC_SUPABASE_URL` and your anon/publishable key are set in `.env.local`.
- **Testing proxy stability:** Restart the dev server, navigate between `/`, `/compose`, `/inbox`, and `/login`. Temporarily block Supabase in your firewall or disconnect the network to confirm the app still loads (with a warning in the terminal).

## Antique isolation

- The **only** route with the antique/nostalgia look is **/open/[id]** (parchment, serif, wax-seal style).
- Antique styling is **scoped only** to that route: it is applied via a wrapper with `data-open-theme="antique"`; the CSS in `styles/opening-ceremony.css` targets only `[data-open-theme="antique"]` and does not touch `:root` or `[data-theme="..."]`. The rest of the app stays on the selected modern theme (purple/ocean/emerald/aurora).
- Modern routes use the default theme (neutral, glassy). Antique assets and fonts are used only in the open ceremony components.
