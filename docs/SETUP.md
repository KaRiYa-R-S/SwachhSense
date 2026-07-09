# SwachhSense — Firebase Setup Guide (step by step)

Follow this once as a team. Total time: ~10 minutes. Member 1 (Team Lead)
should do steps 1–4 and share the config with everyone.

## 1. Create the Firebase project
1. Open https://console.firebase.google.com and sign in with a Google account.
2. Click **Add project** → name it `swachhsense` (any name works).
3. Google Analytics: **disable** (not needed) → **Create project**.

## 2. Register the web app & get your keys
1. On the project overview page, click the **`</>` (Web)** icon.
2. App nickname: `swachhsense-web`. Do **not** tick "Also set up Firebase Hosting"
   here (the repo already contains `firebase.json` and `.firebaserc`).
3. Firebase shows a `firebaseConfig` object. Copy the six values into
   **`public/js/firebase-config.js`**, replacing the placeholders.

## 3. Enable Email/Password sign-in
1. Left sidebar: **Build → Authentication → Get started**.
2. **Sign-in method** tab → **Email/Password** → toggle **Enable** → Save.

## 4. Point the repo at your project
Open **`.firebaserc`** and replace `YOUR_FIREBASE_PROJECT_ID` with the
**Project ID** shown in Project settings (⚙ icon → General).

## 5. Test locally
```bash
cd public && python3 -m http.server 5000
```
Open http://localhost:5000 → **Create account** → you should land on the
protected dashboard. Log out and confirm that opening `dashboard.html`
directly bounces you back to the login page.

## 6. Deploy
```bash
npm install -g firebase-tools
firebase login
firebase deploy
```
Copy the printed `https://<project-id>.web.app` URL into `README.md` —
the hosted URL is a submission requirement.

## Troubleshooting
| Symptom | Cause / fix |
|---|---|
| "Firebase isn't configured yet" on login | Placeholders still in `firebase-config.js` — paste your real keys. |
| `auth/operation-not-allowed` | Email/Password provider not enabled (step 3). |
| Deploy fails with "No project active" | `.firebaserc` still has the placeholder ID, or run `firebase use --add`. |
| Signup works but redirect loops | You opened the file with `file://` — always use a local server or hosting. |
| `auth/unauthorized-domain` after deploy | Authentication → Settings → Authorized domains → add your `.web.app` domain (it's usually added automatically). |
