# Work Log App

This is a lightweight static app for recording day entries.

## Local setup

1. Copy `config.example.js` to `config.js` if the file does not already exist.
2. Paste your Supabase project URL and anon key into `config.js`.
3. Optionally add your deployed Vercel URL as `magicLinkRedirectTo` in `config.js`.
4. Open `index.html` in a browser.

## Supabase setup

1. In Supabase, open the SQL Editor.
2. Run the SQL from `supabase/schema.sql`.
3. In `Project Settings` -> `API`, copy:
   - `Project URL`
   - `anon public` key
4. In `Authentication` -> `URL Configuration`, add your deployed site URL as the `Site URL`.
5. In the same Auth section, add that same deployed URL to `Redirect URLs`.
6. Paste the API values into `config.js`.

## GitHub setup

1. Create a new empty repository in GitHub.
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial work log app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Vercel setup

1. In Vercel, click `Add New...` -> `Project`.
2. Import your GitHub repo.
3. Deploy with the default static settings.
4. Because this app is browser-side only, `config.js` can be committed with the Supabase project URL and anon key. The anon key is meant for client use.

## Secure login

This app now uses Supabase magic-link login.

1. Open the site.
2. Enter an email address.
3. Click `Send Magic Link`.
4. Open the email and tap the sign-in link.

Only signed-in users can open the app and save or read their own rows.
The app can also be restricted to a specific email address with `allowedEmails` in `config.js`.
