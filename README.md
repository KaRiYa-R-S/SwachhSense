# SwachhSense — Smart Public Toilet Monitoring System

**Live demo:** `https://smart-public-toilet-monitoring.web.app` *(update after deployment)*

SwachhSense is an IoT-based monitoring platform for Bengaluru's public toilets, built in support of **Swachh Bharat Mission (Urban)**. Low-cost ESP32 sensor nodes (simulated in this prototype) stream stall occupancy, ammonia (NH₃), water-tank level, soap level and footfall from six pilot facilities to a live civic **command centre** — so cleaning crews are dispatched by evidence, not by complaint.

> Academic project · Department of CSE, Faculty of Engineering & Technology, JAIN (Deemed-to-be University), Bengaluru.

---

## ✨ Features

- **Firebase Authentication** — email/password signup, login and logout, with friendly error handling.
- **Protected routes** — the dashboard and all inner pages are hidden behind a route guard; signed-out visitors are redirected to login with no flash of protected content.
- **Live command centre** — network KPIs with sparklines, an interactive SVG city map, searchable/filterable facility cards, per-facility drill-down drawer with gauges and history charts.
- **Alert workflow** — a rule engine raises alerts (high NH₃, low water/soap, offline nodes), which operators acknowledge and resolve; includes a "simulate incident" demo button.
- **Analytics & evaluation** — footfall curves, cleanliness trends, NH₃ heat strip, status distribution and response metrics.
- **Operations tools** — maintenance log with CSV export, live telemetry console, citizen issue reporting, light/dark theme.

## 🗂 Project structure

```
swachhsense/
├── public/                    # Everything Firebase Hosting serves
│   ├── index.html             # Landing page (public)
│   ├── login.html             # Login (public)
│   ├── signup.html            # Signup (public)
│   ├── dashboard.html         # Live command centre (protected)
│   ├── facilities.html        # Facility network directory (protected)
│   ├── technology.html        # Architecture & data pipeline (protected)
│   ├── team.html              # Project team (protected)
│   ├── css/
│   │   └── site.css           # Shared design system (tokens match the dashboard)
│   ├── js/
│   │   ├── firebase-config.js # Your Firebase project keys go here
│   │   ├── auth.js            # Signup / login controller
│   │   └── auth-guard.js      # Route guard + logout for protected pages
│   └── assets/
│       └── favicon.svg
├── firebase.json              # Firebase Hosting configuration
├── .firebaserc                # Firebase project alias
├── .gitignore
├── COMMITS.md                 # 22-commit plan mapped to files
├── setup-git.sh               # Recreates the commit history under your identity
└── README.md
```

## 👥 Team — one page per member

| Member | Owns | Scope |
|---|---|---|
| Member 1 *(Team Lead)* | `index.html` | Landing page, repo setup, deployment |
| Member 2 | `login.html`, `signup.html` | Firebase Auth integration, validation, route guard |
| Member 3 | `dashboard.html` | Command centre: KPIs, map, alerts, simulation engine |
| Member 4 | `facilities.html` | Facility directory & sensor specifications |
| Member 5 | `technology.html` | Architecture, telemetry format, alert thresholds |
| Member 6 | `team.html` | Team page, README, QA & accessibility review |

> Replace the placeholder names/USNs in `team.html` and this table with your actual team details.

## 🔐 Firebase setup (once, ~5 minutes)

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project** → name it (e.g. `swachhsense`). Google Analytics can be disabled.
2. Inside the project, click the **`</>` Web** icon → register app `swachhsense-web` (skip Hosting here — the config files already exist).
3. Copy the `firebaseConfig` object shown and paste its values into **`public/js/firebase-config.js`**.
4. **Build → Authentication → Get started → Sign-in method → enable Email/Password.**
5. Put your project ID into **`.firebaserc`** (replace `YOUR_FIREBASE_PROJECT_ID`).

## 🖥 Run locally

Any static server works. From the repo root:

```bash
# Option A — Python
cd public && python3 -m http.server 5000
# Option B — Node
npx serve public
# Option C — Firebase emulator
firebase serve
```

Open `http://localhost:5000`, create an account on the signup page, and you'll land in the command centre.

## 🚀 Deploy to Firebase Hosting

```bash
npm install -g firebase-tools   # once
firebase login                  # opens browser
firebase deploy                 # from the repo root
```

The CLI prints your live URL (`https://<project-id>.web.app`). Paste it at the top of this README — a hosted URL is a submission requirement.

## 🌿 Git & GitHub

```bash
git init
bash setup-git.sh               # creates the 22-commit history (see COMMITS.md)
git branch -M main
git remote add origin https://github.com/<your-username>/swachhsense.git
git push -u origin main
```

For genuine team attribution, the better approach is in **COMMITS.md**: each member clones the repo and commits their own page so GitHub shows every contributor.

## 🧭 How authentication works

1. Every protected page loads `firebase-config.js` then `auth-guard.js` in `<head>`.
2. The guard hides the document, asks Firebase for the auth state, and either reveals the page (signed in) or `location.replace("login.html")` (signed out).
3. `auth.js` powers the signup/login forms — validation, friendly Firebase error messages, and redirect to the dashboard on success.
4. Every protected page shows the signed-in user in the top bar with a **Log out** button (`auth.signOut()` → back to login).

## 🔮 Future scope

- Physical ESP32 + MQ-137 deployment replacing the simulation engine
- Firestore persistence for alerts, maintenance logs and citizen reports
- Role-based access (supervisor vs. field crew) via custom claims
- Public citizen view: nearest clean facility with live availability

## 📄 License & attribution

Built for academic evaluation at JAIN (Deemed-to-be University). Sensor data is simulated; facility names reference real Bengaluru locations for context only.
