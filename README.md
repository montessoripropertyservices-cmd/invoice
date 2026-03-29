# Work Log App

This is a lightweight static app for recording day entries.

## Local setup

1. Copy `config.example.js` to `config.js`.
2. Paste your Supabase project URL and anon key into `config.js`.
3. Open `index.html` in a browser.

## Supabase setup

1. In Supabase, open the SQL Editor.
2. Run the SQL from `supabase/schema.sql`.
3. In `Project Settings` -> `API`, copy:
   - `Project URL`
   - `anon public` key
4. Paste those values into `config.js`.

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
4. In Vercel, add the same `config.js` file approach by either:
   - keeping `config.js` out of Git and adding it after deploy, or
   - moving to build-time env vars later when you want a stronger production setup.

For this first version, the app stores data in Supabase when configured and falls back to browser storage when it is not.
